import { Meta, StoryObj } from '@storybook/react';
import BannerSlider, { BannerSliderProps } from '@/components/BannerSlider';
import items from '../mocks/mock';

export default {
	title: 'BannerSlider',
	component: BannerSlider,
	argTypes: {},
	args: {
		items
	},
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	}
} as Meta;

export const Default: StoryObj<BannerSliderProps> = {
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
				<Story />
			</div>
		)
	]
};
