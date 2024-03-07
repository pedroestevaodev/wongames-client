import { HomeLayoutProps } from '..';
import bannerSliderItems from '@/components/BannerSlider/mocks/mock';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import highlightItems from '@/components/Highlight/mocks/mock';

const homeLayoutMock: HomeLayoutProps = {
	banners: bannerSliderItems,
	newGamesTitle: 'New Games',
	newGames: gameCardSliderItems,
	mostPopularGamesTitle: 'Most Popular',
	mostPopularHighlight: highlightItems,
	mostPopularGames: gameCardSliderItems,
	upcommingGamesTitle: 'Upcomming',
	upcommingHighligth: highlightItems,
	upcommingGames: gameCardSliderItems,
	freeGamesTitle: 'Free Games',
	freeHighligth: highlightItems,
	freeGames: gameCardSliderItems
};

export default homeLayoutMock;
