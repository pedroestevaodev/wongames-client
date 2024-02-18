import { Meta, StoryObj } from '@storybook/react';
import Main from '@/components/Main';

export default {
	title: 'Page/Main',
	component: Main,
	parameters: {
		layout: 'centered'
	}
} as Meta;

export const Default: StoryObj = {};

export const Basic: StoryObj = {
	args: {
		title: 'title basic',
		description: 'description basic'
	}
};
