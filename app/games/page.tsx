import React from 'react';
import Games, { GamesLayoutProps } from '@/components/Layouts/Games';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import exploreSidebarMock from '@/components/ExploreSidebar/mocks/mock';

const GamesPage = (props: GamesLayoutProps) => {
	console.log(props);

	return (
		// <Games {...props} />
		<Games filterItems={exploreSidebarMock} games={gameCardSliderItems} />
	);
};

export default GamesPage;
