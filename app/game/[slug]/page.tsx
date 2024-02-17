import React from 'react';
import Game, { GameLayoutProps } from '@/components/Layouts/Game';
import gamePageMock from '@/components/Layouts/Game/mocks/mock';

type GamePageProps = {
	props: GameLayoutProps;
	params: {
		slug: string;
	};
};

const Index = ({ props, params }: GamePageProps) => {
	console.log(params);
	console.log(props);

	return (
		// <Game {...props} />
		<Game
			cover={gamePageMock.cover}
			gameInfo={gamePageMock.gameInfo}
			gallery={gamePageMock.gallery}
			description={gamePageMock.description}
			details={gamePageMock.details}
			upcomingGames={gamePageMock.upcomingGames}
			upcomingHighlight={gamePageMock.upcomingHighlight}
			recommendedGames={gamePageMock.recommendedGames}
		/>
	);
};

export default Index;
