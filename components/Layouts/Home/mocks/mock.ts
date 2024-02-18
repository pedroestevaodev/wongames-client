import { HomeLayoutProps } from '..';
import bannerSliderItems from '@/components/BannerSlider/mocks/mock';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import highlightItems from '@/components/Highlight/mocks/mock';

const homeLayoutMock: HomeLayoutProps = {
	banners: bannerSliderItems,
	newGames: gameCardSliderItems,
	mostPopularHighlight: highlightItems,
	mostPopularGames: gameCardSliderItems,
	upcommingGames: gameCardSliderItems,
	upcommingHighligth: highlightItems,
	upcommingMoreGames: gameCardSliderItems,
	freeHighligth: highlightItems,
	freeGames: gameCardSliderItems
};

export default homeLayoutMock;
