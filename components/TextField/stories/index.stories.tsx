import { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from '@/components/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default {
	title: 'Form/TextField',
	component: TextField,
	argTypes: {
		onInput: { action: 'changed' },
		icon: {
			type: 'string'
		}
	},
	args: {
		label: 'E-mail',
		labelFor: 'Email',
		icon: <FontAwesomeIcon icon={faEnvelope} />,
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

export const WithError: StoryObj<TextFieldProps> = {
	decorators: [
		(Story) => (
			<div style={{ height: '100vh', width: '100vw' }}>
				<div style={{ maxWidth: 300, padding: 15 }}>
					<Story
						args={{
							error: 'Ops... something is wrong'
						}}
					/>
				</div>
			</div>
		)
	]
};
