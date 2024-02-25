import React from 'react';
import Game, { GameLayoutProps } from '@/components/Layouts/Game';
// import { useSearchParams } from "next/navigation";
// import gamePageMock from '@/components/Layouts/Game/mocks/mock';

const Index = (props: GameLayoutProps) => {
	// const router = useSearchParams();

	// if (router.isFallback) return null;

	return (
		// <Game  />
		<Game
			// cover={gamePageMock.cover}
			// gameInfo={gamePageMock.gameInfo}
			// gallery={gamePageMock.gallery}
			// description={gamePageMock.description}
			// details={gamePageMock.details}
			// upcomingGames={gamePageMock.upcomingGames}
			// upcomingHighlight={gamePageMock.upcomingHighlight}
			// recommendedGames={gamePageMock.recommendedGames}
			{...props}
		/>
	);
};

export default Index;
