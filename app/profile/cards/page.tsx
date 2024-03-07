import React from 'react';
import CardsList from '@/components/CardsList';
import Profile from '@/components/Layouts/Profile';
import paymentOptionsMock from '@/components/PaymentOptions/mocks/mock';

const ProfileCardsPage = () => {
	return (
		<Profile>
			<CardsList cards={paymentOptionsMock} />
		</Profile>
	);
};

export default ProfileCardsPage;
