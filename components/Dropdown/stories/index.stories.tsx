import { Meta, StoryObj } from '@storybook/react';
import Dropdown, { DropdownProps } from '@/components/Dropdown';

export default {
	title: 'Dropdown',
	component: Dropdown,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	}
} as Meta<DropdownProps>;

export const Default: StoryObj<DropdownProps> = {
	args: {
		title: 'Click here',
		children: 'Content'
	}
};
