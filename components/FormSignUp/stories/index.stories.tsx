import { Meta, StoryObj } from '@storybook/react';
import FormSignUp from '@/components/FormSignUp';

export default {
	title: 'Form/FormSignUp',
	component: FormSignUp,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'light'
		}
	},
	decorators: [
		(Story) => (
			<div style={{ width: 300, margin: 'auto' }}>
				<Story />
			</div>
		)
	]
} as Meta;

export const Default: StoryObj = {};
