import React from 'react';
import Profile from '@/components/Layouts/Profile';
import OrdersList, { OrdersListProps } from '@/components/OrdersList';
import ordersListMock from '@/components/OrdersList/mocks/mock';

const ProfileOrdersPage = ({ items }: OrdersListProps) => {
	console.log(items);

	return (
		<Profile>
			{/* <OrdersList items={items} /> */}
			<OrdersList items={ordersListMock} />
		</Profile>
	);
};

export default ProfileOrdersPage;
