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
	args: GameInfoItens,
	decorators: [
		(Story) => (
			<div
				style={{
					width: '100%',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
					<Story />
				</div>
			</div>
		)
	]
} as Meta<GameInfoProps>;

export const Default: StoryObj<GameInfoProps> = {};
