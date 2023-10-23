import { Meta, StoryObj } from '@storybook/react';
import Highlight, { HighlightProps } from '@/components/Highlight';
import item from '../mocks/mock';

export default {
	title: 'Highlight',
	component: Highlight,
	argTypes: {},
	args: { ...item }
} as Meta;

export const Default: StoryObj<HighlightProps> = {
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '104rem' }}>
				<Story />
			</div>
		)
	]
};

export const WithFloatImage: StoryObj<HighlightProps> = {
	args: {
		floatImage: '/img/red-dead-float.png'
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '104rem' }}>
				<Story />
			</div>
		)
	]
};
