import { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from '@/components/Checkbox';

export default {
	title: 'Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	},
	argTypes: {
		onCheck: { action: 'checked' }
	},
	args: {
		label: 'Action',
		labelFor: 'action',
		labelColor: 'white'
	}
} as Meta;

export const Default: StoryObj<CheckboxProps> = {
	decorators: [
		(Story) => (
			<>
				<div style={{ padding: 10 }}>
					<Story />
				</div>
				<div style={{ padding: 10 }}>
					<Story />
				</div>
				<div style={{ padding: 10 }}>
					<Story />
				</div>
			</>
		)
	]
};
