import { Meta, StoryObj } from '@storybook/react';
import Main from '@/components/Main';
import { fn } from "@storybook/test";

export default {
	title: 'Page/Main',
	component: Main,
	parameters: {
		layout: 'centered'
	},
	args: {
		onClick: fn()
	}
} as Meta;

export const Default: StoryObj = {};

export const Basic: StoryObj = {
	args: {
		title: 'title basic',
		description: 'description basic'
	}
};
