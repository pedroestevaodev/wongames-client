import React from 'react';
import Wishlist from '@/components/Layouts/Wishlist';
import wishlistLayoutMock from '@/components/Layouts/Wishlist/mocks/mock';

const WishlistPage = () => {
	return (
		<Wishlist
			recommendedGames={wishlistLayoutMock.recommendedGames}
			recommendedHighlight={wishlistLayoutMock.recommendedHighlight}
		/>
	);
};

export default WishlistPage;
