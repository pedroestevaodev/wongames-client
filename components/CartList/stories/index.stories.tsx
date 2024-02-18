import { Meta, StoryObj } from '@storybook/react';
import CartList, { CartListProps } from '@/components/CartList';
import cartListMock from '../mocks/mock';

export default {
	title: 'Payment/CartList',
	component: CartList,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	args: {
		items: cartListMock,
		total: 'R$ 330,00'
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 800 }}>
				<Story />
			</div>
		)
	]
} as Meta<CartListProps>;

export const Default: StoryObj<CartListProps> = {};
