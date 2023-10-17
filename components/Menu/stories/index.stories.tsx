import { Meta, StoryObj } from '@storybook/react';
import Menu from '@/components/Menu';
import { MenuProps } from '@/components/Menu';

export default {
	title: 'Menu',
	component: Menu,
	argTypes: {},
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	}
} as Meta;

export const Default: StoryObj<MenuProps> = {};
