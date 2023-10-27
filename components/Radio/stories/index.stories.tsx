import { Meta, StoryObj } from '@storybook/react';
import Radio, { RadioProps } from '@/components/Radio';

export default {
	title: 'Radio',
	component: Radio,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'won-dark'
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

export const Default: StoryObj<RadioProps> = {
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
