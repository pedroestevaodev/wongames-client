import { Meta, StoryObj } from '@storybook/react';
import GameInfo, { GameInfoProps } from '@/components/GameInfo';
import GameInfoItens from '../mocks/mock';

export default {
	title: 'Game/GameInfo',
	component: GameInfo,
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	},
	argTypes: {},
	args: GameInfoItens
} as Meta;

export const Default: StoryObj<GameInfoProps> = {
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
				<Story />
			</div>
		)
	]
};
