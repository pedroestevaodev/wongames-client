import React from 'react';
import Profile from '@/components/Layouts/Profile';
import OrdersList from '@/components/OrdersList';
import ordersListMock from '@/components/OrdersList/mocks/mock';

const ProfileOrdersPage = () => {
	return (
		<Profile>
			<OrdersList items={ordersListMock} />
		</Profile>
	);
};

export default ProfileOrdersPage;
