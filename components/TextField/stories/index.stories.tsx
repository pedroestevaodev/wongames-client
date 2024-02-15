import { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from '@/components/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default {
	title: 'Form/TextField',
	component: TextField,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'light'
		}
	},
	argTypes: {
		onInput: { action: 'changed' }
		// icon: {
		// 	type: 'string'
		// }
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
			<div
				style={{
					height: '100vh',
					width: '100vw',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<div style={{ maxWidth: 300, padding: 15 }}>
					<Story />
				</div>
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
