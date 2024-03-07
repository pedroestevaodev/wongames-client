import React from 'react';
import Wishlist, { WishlistLayoutProps } from '@/components/Layouts/Wishlist';
import wishlistLayoutMock from '@/components/Layouts/Wishlist/mocks/mock';

type WishlistPageProps = {
	props: WishlistLayoutProps;
	params: {
		slug: string;
	};
};

const WishlistPage = ({ props, params }: WishlistPageProps) => {
	console.log(params);
	console.log(props);

	return (
		// <Wishlist {...props} />
		<Wishlist
			recommendedGames={wishlistLayoutMock.recommendedGames}
			recommendedHighlight={wishlistLayoutMock.recommendedHighlight}
		/>
	);
};

export default WishlistPage;
