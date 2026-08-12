'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { GameCardProps } from "@/components/GameCard";
import { useSession } from "next-auth/react";
import { GameFragmentFragment } from "@/graphql/generated/graphql";
import { useApolloClient, useMutation } from "@apollo/client";
import { MUTATION_CREATE_WISHLIST, MUTATION_UPDATE_WISHLIST } from "@/graphql/mutations/wishlist";
import { GET_WISHLIST, useQueryWishlist } from "@/graphql/queries/wishlist";
import { GameFragment } from "@/graphql/queries/fragments/games";
import { gamesMapper } from "@/utils/mappers";

export type WishlistContextData = {
	items: GameCardProps[];
	isInWishlist: (id: string) => boolean;
	addToWishlist: (id: string) => Promise<void>;
	removeFromWishlist: (id: string) => Promise<void>;
	loading: boolean;
};

export const WishlistContextDefaultValues = {
	items: [],
	isInWishlist: () => false,
	addToWishlist: async () => undefined,
	removeFromWishlist: async () => undefined,
	loading: false,
};

export const WishlistContext = createContext<WishlistContextData>(
	WishlistContextDefaultValues
);

export type WishlistProviderProps = {
	children: React.ReactNode;
};

const normalizeGames = (games: Array<GameFragmentFragment | null> | null | undefined) =>
	(games || []).filter((game): game is GameFragmentFragment => game !== null);

const WishlistProvider = ({ children }: WishlistProviderProps) => {
	const { data: session } = useSession();
	const client = useApolloClient();
	const userId = session?.user?.id;

	const [wishlistId, setWishlistId] = useState<string | null>(null);
	const [wishlistItems, setWishlistItems] = useState<GameFragmentFragment[]>([]);

	const [createList, { loading: loadingCreate }] = useMutation(MUTATION_CREATE_WISHLIST, {
		context: { authenticated: true },
	});

	const [updateList, { loading: loadingUpdate }] = useMutation(MUTATION_UPDATE_WISHLIST, {
		context: { authenticated: true },
	});

	const { data, loading: loadingQuery, refetch } = useQueryWishlist({
		skip: !userId,
		context: { authenticated: true },
		variables: {
			documentId: userId as string,
		},
	});

	useEffect(() => {
		const wishlist = data?.wishlists?.[0];
		if (!wishlist) {
			setWishlistId(null);
			setWishlistItems([]);
			return;
		}

		setWishlistId(wishlist.id);
		setWishlistItems(normalizeGames(wishlist.games as Array<GameFragmentFragment | null>));
	}, [data?.wishlists]);

	const wishlistIds = useMemo(() => wishlistItems.map((game) => game.id), [wishlistItems]);

	const isInWishlist = (id: string) => wishlistItems.some((game) => game.id === id);

	const optimisticGameResponse = useCallback((id: string): GameFragmentFragment => {
		return wishlistItems.find((game) => game.id === id) || client.readFragment({
			id: `Game:${id}`,
			fragment: GameFragment,
		}) || {
			__typename: 'Game',
			id,
			name: '',
			slug: '',
			cover: { __typename: 'UploadFile', url: '' },
			developers: [{ __typename: 'Developer', name: '' }],
			price: 0,
		};
	}, [client, wishlistItems]);

	const applyMutationResult = (
		nextWishlistId: string | null | undefined,
		games: Array<GameFragmentFragment | null> | null | undefined,
	) => {
		if (nextWishlistId) {
			setWishlistId(nextWishlistId);
		}
		setWishlistItems(normalizeGames(games));
	};

	const persistWishlist = async (gameIds: string[], optimisticGames: GameFragmentFragment[]) => {
		if (!userId) {
			return;
		}

		if (wishlistId) {
			const { data: mutationData } = await updateList({
				variables: {
					documentId: wishlistId,
					data: { games: gameIds },
				},
				optimisticResponse: {
					updateWishlist: {
						id: wishlistId,
						games: optimisticGames,
						__typename: 'Wishlist',
					},
				},
				refetchQueries: [{ query: GET_WISHLIST, variables: { documentId: userId } }],
			});

			applyMutationResult(
				mutationData?.updateWishlist?.id,
				mutationData?.updateWishlist?.games,
			);
			return;
		}

		try {
			const { data: mutationData } = await createList({
				variables: {
					data: {
						user: userId,
						games: gameIds,
					},
				},
				optimisticResponse: {
					createWishlist: {
						id: String(Math.round(Math.random() * -1000000)),
						games: optimisticGames,
						__typename: 'Wishlist',
					},
				},
				refetchQueries: [{ query: GET_WISHLIST, variables: { documentId: userId } }],
			});

			applyMutationResult(
				mutationData?.createWishlist?.id,
				mutationData?.createWishlist?.games,
			);
		} catch {
			const { data: refetchedData } = await refetch();
			const existingWishlist = refetchedData?.wishlists?.[0];

			if (!existingWishlist?.id) {
				throw new Error('Unable to create or load wishlist');
			}

			const { data: mutationData } = await updateList({
				variables: {
					documentId: existingWishlist.id,
					data: { games: gameIds },
				},
				refetchQueries: [{ query: GET_WISHLIST, variables: { documentId: userId } }],
			});

			applyMutationResult(
				mutationData?.updateWishlist?.id ?? existingWishlist.id,
				mutationData?.updateWishlist?.games,
			);
		}
	};

	const addToWishlist = async (id: string) => {
		if (!userId || isInWishlist(id)) {
			return;
		}

		const updatedGames = [...wishlistItems, optimisticGameResponse(id)];
		const updatedGameIds = [...wishlistIds, id];

		try {
			await persistWishlist(updatedGameIds, updatedGames);
		} catch (error) {
			console.error('Failed to add game to wishlist:', error);
		}
	};

	const removeFromWishlist = async (id: string) => {
		if (!userId || !wishlistId || !isInWishlist(id)) {
			return;
		}

		const updatedGames = wishlistItems.filter(({ id: gameId }) => gameId !== id);
		const updatedGameIds = wishlistIds.filter((gameId) => gameId !== id);

		try {
			await persistWishlist(updatedGameIds, updatedGames);
		} catch (error) {
			console.error('Failed to remove game from wishlist:', error);
		}
	};

	return (
		<WishlistContext.Provider
			value={{
				items: gamesMapper(wishlistItems),
				isInWishlist,
				addToWishlist,
				removeFromWishlist,
				loading: loadingQuery || loadingCreate || loadingUpdate,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => {
	const context = useContext(WishlistContext);
	if (!context) {
		throw new Error("useWishlist must be used within a WishlistProvider");
	}
	return context;
};

export { WishlistProvider, useWishlist };
