import exploreSidebarMock from '@/components/ExploreSidebar/mocks/mock';
import { GamesLayoutProps } from '..';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';

const gamePageMock: GamesLayoutProps = {
	filterItems: exploreSidebarMock,
	games: gameCardSliderItems
};

export default gamePageMock;
