import { Meta, StoryObj } from '@storybook/react';
import GameCardSlider from '@/components/GameCardSlider';
import { GameCardProps } from '@/components/GameCard';
import items from '../mocks/mock';

export default {
	title: 'GameCardSlider',
	component: GameCardSlider,
	argTypes: {},
	args: { items },
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	}
} as Meta;

export const Default: StoryObj<GameCardProps[]> = {
	args: items,
	decorators: [
		(Story) => (
			<div style={{ margin: '0 auto', maxWidth: '130rem' }}>
				<Story />
			</div>
		)
	]
};
