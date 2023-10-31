import { Meta, StoryObj } from '@storybook/react';
import FormSignIn from '@/components/FormSignIn';

export default {
	title: 'FormSignIn',
	component: FormSignIn,
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
