import { Meta, StoryObj } from '@storybook/react';
import FormSignUp from '@/components/FormSignUp';

export default {
	title: 'FormSignUp',
	component: FormSignUp,
	argTypes: {}
} as Meta;

export const Default: StoryObj = {
	decorators: [
		(Story) => (
			<div style={{ width: 300, margin: 'auto' }}>
				<Story />
			</div>
		)
	]
};
