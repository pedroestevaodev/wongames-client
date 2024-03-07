import React from 'react';
import Cart, { CartLayoutProps } from '@/components/Layouts/Cart';
import cartPageMock from '@/components/Layouts/Cart/mocks/mock';

type CartPageProps = {
	props: CartLayoutProps;
	params: {
		slug: string;
	};
};

const CartPage = ({ props, params }: CartPageProps) => {
	console.log(params);
	console.log(props);

	return (
		// <Cart {...props} />
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
