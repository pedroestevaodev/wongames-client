import { Meta, StoryObj } from '@storybook/react';
import FormSignUp from '@/components/FormSignUp';

export default {
	title: 'Form/FormSignUp',
	component: FormSignUp,
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
