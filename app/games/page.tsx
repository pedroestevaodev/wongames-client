import React from 'react';
import Games from // GamesLayoutProps
'@/components/Layouts/Games';
import { getClient } from '@/lib/apolloClient';
import { QUERY_GAMES } from '@/graphql/queries/games';
import exploreSidebarMock from '@/components/ExploreSidebar/mocks/mock';

const GamesPage = async () => {
	const { data } = await getClient().query({
		query: QUERY_GAMES,
		variables: { limit: 9 },
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	});

	const gamesData = data.games.data.map((game) => ({
		title: game.attributes.name,
		developer: game.attributes.developers.data[0].attributes.name,
		img: `http://localhost:1338${game.attributes.cover.data.attributes.url}`,
		price: new Intl.NumberFormat('en', {
			style: 'currency',
			currency: 'USD'
		}).format(game.attributes.price)
	}));

	return (
		<Games
			games={gamesData}
			filterItems={exploreSidebarMock}
			// {...data as GamesLayoutProps}
		/>
	);
};

export default GamesPage;
