import { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from '@/components/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default {
	title: 'Form/TextField',
	component: TextField,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'light'
		}
	},
	argTypes: {
		onInput: { action: 'changed' }
	},
	args: {
		label: 'E-mail',
		labelFor: 'Email',
		icon: <FontAwesomeIcon icon={faEnvelope} />,
		id: 'Email',
		initialValue: '',
		placeholder: 'john.cage@gmail.com'
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 300, padding: 15 }}>
				<Story />
			</div>
		)
	]
} as Meta<TextFieldProps>;

export const Default: StoryObj<TextFieldProps> = {};

export const WithError: StoryObj<TextFieldProps> = {
	args: {
		error: 'Ops... something is wrong'
	}
};
