import { Meta, StoryObj } from '@storybook/react';
import Highlight, { HighlightProps } from '@/components/Highlight';

export default {
	title: 'Highlight',
	component: Highlight,
	argTypes: {},
	args: {
		title: 'Read Dead is back',
		subTitle: "Come see John's new adventures",
		backgroundImage: '/img/red-dead-img.jpg',
		buttonLabel: 'Buy now',
		buttonLink: '/games/rdr2'
	}
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
