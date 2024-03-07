import React from 'react';
import Cart from '@/components/Layouts/Cart';
import cartPageMock from '@/components/Layouts/Cart/mocks/mock';

const CartPage = () => {
	return (
		<Cart
			recommendedGames={cartPageMock.recommendedGames}
			recommendedHighlight={cartPageMock.recommendedHighlight}
			items={cartPageMock.items}
			total={cartPageMock.total}
			cards={cartPageMock.cards}
		/>
	);
};

export default CartPage;
