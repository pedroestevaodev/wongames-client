import { Meta, StoryObj } from '@storybook/react';
import OrdersList, { OrdersListProps } from '@/components/OrdersList';
import ordersListMock from '../mocks/mock';

export default {
	title: 'Profile/OrdersList',
	component: OrdersList,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	args: {
		items: ordersListMock
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 850, margin: 'auto' }}>
				<Story />
			</div>
		)
	]
} as Meta<OrdersListProps>;

export const Default: StoryObj<OrdersListProps> = {};
