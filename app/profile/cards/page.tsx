import React from 'react';
import CardsList, { CardsListProps } from '@/components/CardsList';
import Profile from '@/components/Layouts/Profile';
import paymentOptionsMock from '@/components/PaymentOptions/mocks/mock';

const ProfileCardsPage = ({ cards }: CardsListProps) => {
	console.log(cards);

	return (
		<Profile>
			{/* <CardsList cards={cards} /> */}
			<CardsList cards={paymentOptionsMock} />
		</Profile>
	);
};

export default ProfileCardsPage;
