import { Meta, StoryObj } from '@storybook/react';
import Ribbon, { RibbonProps } from '@/components/Ribbon';

export default {
	title: 'Ribbon',
	component: Ribbon,
	args: {
		children: 'Best Seller'
	},
	argTypes: {
		children: {
			type: 'string'
		}
	},
	decorators: [
		(Story) => (
			<div
				style={{
					height: '100vh',
					width: '100vw',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<div
					style={{
						width: '40rem',
						height: '20rem',
						position: 'relative',
						backgroundColor: '#888'
					}}
				>
					<Story />
				</div>
			</div>
		)
	]
} as Meta<RibbonProps>;

export const Default: StoryObj<RibbonProps> = {};
