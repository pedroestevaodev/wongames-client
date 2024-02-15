import { Meta, StoryObj } from '@storybook/react';
import Menu from '@/components/Menu';
import { MenuProps } from '@/components/Menu';

export default {
	title: 'Menu',
	component: Menu,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	}
} as Meta<MenuProps>;

export const Default: StoryObj<MenuProps> = {};

export const Logged: StoryObj<MenuProps> = {
	args: {
		username: 'John Doe'
	}
};
