import React from 'react';
import Wishlist from '@/components/Layouts/Wishlist';
import { getClient } from '@/lib/apolloClient';
import { 
	GameEntityResponseCollection, 
	GetRecommendedQuery, 
	GetRecommendedQueryVariables, 
	HighlightFragmentFragment 
} from '@/graphql/generated/graphql';
import { GET_RECOMMENDED } from '@/graphql/queries/recommended';
import { gamesMapper, highlightMapper } from "@/utils/mappers";

const WishlistPage = async () => {
	const { 
		data: { recommended } 
	} = await getClient().query<GetRecommendedQuery, GetRecommendedQueryVariables>({
		query: GET_RECOMMENDED,
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	});

	return (
		<Wishlist
			recommendedTitle={recommended?.data?.attributes?.section.title || "You may like these games"}
			recommendedGames={gamesMapper(recommended?.data?.attributes?.section.games as GameEntityResponseCollection)}
			recommendedHighlight={highlightMapper(recommended?.data?.attributes?.section.highlight as HighlightFragmentFragment)}
		/>
	);
};

export default WishlistPage;
