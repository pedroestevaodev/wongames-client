import { Meta, StoryObj } from '@storybook/react';
import FormSignIn from '@/components/FormSignIn';

export default {
	title: 'Form/FormSignIn',
	component: FormSignIn,
	parameters: {
		backgrounds: {
			default: 'light'
		}
	},
	decorators: [
		(Story) => (
			<div style={{ width: '100%', height: '100vh', display: 'flex' }}>
				<div style={{ width: 300, margin: 'auto' }}>
					<Story />
				</div>
			</div>
		)
	]
} as Meta;

export const Default: StoryObj = {};
