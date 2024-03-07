import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import highlightItems from '@/components/Highlight/mocks/mock';
import { WishlistLayoutProps } from '..';

const wishlistLayoutMock: WishlistLayoutProps = {
	games: gameCardSliderItems,
	recommendedGames: gameCardSliderItems.slice(0, 5),
	recommendedHighlight: highlightItems
};

export default wishlistLayoutMock;
