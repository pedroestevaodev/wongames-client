import { Meta, StoryObj } from '@storybook/react';
import CartList, { CartListProps } from '@/components/CartList';
import cartListMock from '../mocks/mock';
import { fn } from "@storybook/test";

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
		total: 330,
		onClick: fn()
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

export const WithButton: StoryObj<CartListProps> = {
	args: {
		hasButton: true
	}
};

export const Empty: StoryObj<CartListProps> = {
	args: {
		items: []
	}
};
