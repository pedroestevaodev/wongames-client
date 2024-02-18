import { Meta, StoryObj } from '@storybook/react';
import CartIcon, { CartIconProps } from '@/components/CartIcon';

export default {
	title: 'CartIcon',
	component: CartIcon,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	}
} as Meta<CartIconProps>;

export const Default: StoryObj<CartIconProps> = {};

export const WithItems: StoryObj<CartIconProps> = {
	args: {
		quantity: 3
	}
};
