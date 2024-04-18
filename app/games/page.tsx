import React from 'react';
import Games from '@/components/Layouts/Games';
import exploreSidebarMock from '@/components/ExploreSidebar/mocks/mock';

const GamesPage = async () => {
	return (
		<Games
			filterItems={exploreSidebarMock}
		/>
	);
};

export default GamesPage;
