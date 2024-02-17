import { Meta, StoryObj } from '@storybook/react';
import CartList, { CartListProps } from '@/components/CartList';
import cartListMock from '../mocks/mock';

export default {
	title: 'CartList',
	component: CartList,
	args: {
		items: cartListMock,
		total: 'R$ 330,00'
	},
	// argTypes: {
	//     items: {
	//         type: ''
	//     }
	// },
	pararmeters: {
		backgrounds: {
			default: 'dark'
		}
	}
} as Meta;

export const Default: StoryObj<CartListProps> = {
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 800 }}>
				<Story />
			</div>
		)
	]
};
