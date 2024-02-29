import { Meta, StoryObj } from '@storybook/react';
import GameCard, { GameCardProps } from '@/components/GameCard';

export default {
	title: 'Game/GameCard',
	component: GameCard,
	argTypes: {
		ribbon: {
			type: 'string'
		},
		onFav: {
			action: 'clicked'
		}
	},
	args: {
		slug: 'population-zero',
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x140',
		price: 235,
		promotionalPrice: 200
	},
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<div style={{ width: '30rem' }}>
				<Story />
			</div>
		)
	]
} as Meta;

export const Default: StoryObj<GameCardProps> = {};

export const WithRibbon: StoryObj<GameCardProps> = {
	args: {
		ribbon: '20% OFF',
		ribbonSize: 'small',
		ribbonColor: 'primary'
	}
};
