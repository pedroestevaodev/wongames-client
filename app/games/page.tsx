import React from 'react';
import Games from '@/components/Layouts/Games';
import { getClient } from '@/lib/apolloClient';
import { Query } from '@/graphql/generated/graphql';
import { GET_GAMES } from '@/graphql/queries/games';
import { GameCardProps } from '@/components/GameCard';
import exploreSidebarMock from '@/components/ExploreSidebar/mocks/mock';

const GamesPage = async () => {
	const { data } = await getClient().query<Query>({
		query: GET_GAMES,
		variables: { limit: 9 },
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	});

	const gamesData = data.games?.data.map((game) => ({
		slug: game.attributes?.slug,
		title: game.attributes?.name,
		developer: game.attributes?.developers?.data[0].attributes?.name,
		img: `${process.env.API_URL}${game.attributes?.cover?.data?.attributes?.url}`,
		price: game.attributes?.price || 0
	}));

	return (
		<Games
			games={gamesData as GameCardProps[]}
			filterItems={exploreSidebarMock}
			// {...data as GamesLayoutProps}
		/>
	);
};

export default GamesPage;
