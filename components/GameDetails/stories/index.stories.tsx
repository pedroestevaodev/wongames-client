import { Meta, StoryObj } from '@storybook/react';
import GameDetails from '@/components/GameDetails';

export default {
	title: 'GameDetails',
	component: GameDetails,
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	},
	argTypes: {}
} as Meta;

export const Default: StoryObj = {
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
				<Story />
			</div>
		)
	]
};
