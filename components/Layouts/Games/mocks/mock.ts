import { ItemProps } from "@/components/ExploreSidebar";
import exploreSidebarMock from '@/components/ExploreSidebar/mocks/mock';
import { GameCardProps } from "@/components/GameCard";
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';

type GamesLayoutProps = {
	games: GameCardProps[];
	filterItems: ItemProps[];
};

const gamePageMock: GamesLayoutProps = {
	games: gameCardSliderItems,
	filterItems: exploreSidebarMock
};

export default gamePageMock;
