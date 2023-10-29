import { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from '@/components/TextField';

export default {
	title: 'TextField',
	component: TextField,
	argTypes: {
		onInput: { action: 'changed' }
	},
	args: {
		label: 'E-mail',
		labelFor: 'Email',
		id: 'Email',
		initialValue: '',
		placeholder: 'john.cage@gmail.com'
	}
} as Meta;

export const Default: StoryObj<TextFieldProps> = {
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 300, padding: 15 }}>
				<Story />
			</div>
		)
	]
};
