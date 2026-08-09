import React from 'react';
import Games from '@/components/Layouts/Games';
import { getClient } from "@/lib/apolloClient";
import { getFilterItems } from "@/utils/filters/fields";
import { GameFragmentFragment, GetGamesQuery, GetGamesQueryVariables } from "@/graphql/generated/graphql";
import { GET_GAMES } from "@/graphql/queries/games";

export const revalidate = 60;

const GamesPage = async () => {
	const client = getClient();
	const filterItems = await getFilterItems();

	let initialData: GameFragmentFragment[] = [];

	try {
		const { data, error } = await client.query<GetGamesQuery, GetGamesQueryVariables>({
			query: GET_GAMES,
			variables: { limit: 15, start: 0, sort: "name:asc" },
			errorPolicy: "all",
			context: {
				fetchOptions: {
					next: { revalidate: 60 },
				},
			},
		});

		if (!error && data?.games) {
			initialData = data.games as GameFragmentFragment[];
		}
	} catch {
		// API indisponível no build — a página hidrata via client query.
	}

	return (
		<Games
			filterItems={filterItems}
			initialData={initialData}
		/>
	);
};

export default GamesPage;
