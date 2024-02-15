import { Meta, StoryObj } from '@storybook/react';
import Logo, { LogoProps } from '@/components/Logo';

export default {
	title: 'Logo',
	component: Logo,
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	},
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
				<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
					<Story />
				</div>
			</div>
		)
	]
} as Meta<LogoProps>;

export const Default: StoryObj<LogoProps> = {};
