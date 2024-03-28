import React from 'react';
import Games from '@/components/Layouts/Games';
import { getClient } from '@/lib/apolloClient';
import { GameEntityResponseCollection, GetGamesQuery, GetGamesQueryVariables } from '@/graphql/generated/graphql';
import { GET_GAMES } from '@/graphql/queries/games';
import exploreSidebarMock from '@/components/ExploreSidebar/mocks/mock';
import { gamesMapper } from "@/utils/mappers";

const GamesPage = async () => {
	const { data } = await getClient().query<GetGamesQuery, GetGamesQueryVariables>({
		query: GET_GAMES,
		variables: { limit: 15 },
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	});

	return (
		<Games
			games={gamesMapper(data.games as GameEntityResponseCollection)}
			filterItems={exploreSidebarMock}
			// {...data as GamesLayoutProps}
		/>
	);
};

export default GamesPage;
