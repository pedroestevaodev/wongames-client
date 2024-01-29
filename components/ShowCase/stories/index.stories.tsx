import { Meta, StoryObj } from '@storybook/react';
import ShowCase, { ShowCaseProps } from '@/components/ShowCase';
import highlightItems from '@/components/Highlight/mocks/mock';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';

export default {
	title: 'ShowCase',
	component: ShowCase,
	argTypes: {},
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<div style={{ margin: '0 auto' }}>
				<Story />
			</div>
		)
	]
} as Meta;

export const Default: StoryObj<ShowCaseProps> = {
	args: {
		title: 'Most Popular',
		highlight: highlightItems,
		games: gameCardSliderItems
	}
};

export const WithoutHighlight: StoryObj<ShowCaseProps> = {
	args: {
		title: 'Most Popular',
		games: gameCardSliderItems
	}
};

export const WithoutGames: StoryObj<ShowCaseProps> = {
	args: {
		title: 'Most Popular',
		highlight: highlightItems
	}
};
