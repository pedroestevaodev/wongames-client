import cartListMock from '@/components/CartList/mocks/mock';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import highlightItems from '@/components/Highlight/mocks/mock';
import paymentOptionsMock from '@/components/PaymentOptions/mocks/mock';
import { CartLayoutProps } from '..';

const cartPageMock: CartLayoutProps = {
	items: cartListMock,
	total: 430,
	cards: paymentOptionsMock,
	recommendedTitle: 'You may like these games',
	recommendedGames: gameCardSliderItems,
	recommendedHighlight: highlightItems
};

export default cartPageMock;
