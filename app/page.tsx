import React from 'react';
import Home from '@/components/Layouts/Home';
import { GET_HOME } from '@/graphql/queries/home';
import { getClient } from '@/lib/apolloClient';
import {
	BannerEntityResponseCollection,
	GameEntityResponseCollection,
	GetHomeQuery,
	GetHomeQueryVariables,
	HighlightFragmentFragment
} from '@/graphql/generated/graphql';
import { 
	bannerMapper, 
	gamesMapper, 
	highlightMapper 
} from '@/utils/mappers';

const Index = async () => {
	const {
		data: { banners, newGames, upcomingGames, freeGames, sections }
	} = await getClient().query<GetHomeQuery, GetHomeQueryVariables>({
		query: GET_HOME,
		variables: { date: new Date().toISOString().slice(0, 10) },
		context: {
			fetchOptions: {
				next: { revalidate: 10 }
			}
		}
	});

	return (
		<>
			<Home
				banners={bannerMapper(banners as BannerEntityResponseCollection)}
				newGamesTitle={sections?.data?.attributes?.newGames?.title || ''}
				newGames={gamesMapper(newGames as GameEntityResponseCollection)}
				mostPopularGamesTitle={
					sections?.data?.attributes?.popularGames?.title || ''
				}
				mostPopularHighlight={highlightMapper(
					sections?.data?.attributes?.popularGames
						?.highlight as HighlightFragmentFragment
				)}
				mostPopularGames={gamesMapper(
					sections?.data?.attributes?.popularGames
						?.games as GameEntityResponseCollection
				)}
				upcommingGamesTitle={
					sections?.data?.attributes?.upcomingGames?.title || ''
				}
				upcommingHighligth={highlightMapper(
					sections?.data?.attributes?.upcomingGames
						?.highlight as HighlightFragmentFragment
				)}
				upcommingGames={gamesMapper(
					upcomingGames as GameEntityResponseCollection
				)}
				freeGamesTitle={sections?.data?.attributes?.freeGames?.title || ''}
				freeHighligth={highlightMapper(
					sections?.data?.attributes?.freeGames
						?.highlight as HighlightFragmentFragment
				)}
				freeGames={gamesMapper(freeGames as GameEntityResponseCollection)}
			/>
		</>
	);
};

export default Index;
