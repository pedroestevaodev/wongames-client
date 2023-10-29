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
	}
} as Meta;

export const Default: StoryObj<CheckboxProps> = {
	decorators: [
		(Story) => (
			<div style={{ height: '100vh', width: '100vw' }}>
				<div style={{ padding: 10 }}>
					<Story
						args={{
							name: 'category',
							label: 'Action',
							labelFor: 'action'
						}}
					/>
				</div>
				<div style={{ padding: 10 }}>
					<Story
						args={{
							name: 'category',
							label: 'Adventure',
							labelFor: 'adventure'
						}}
					/>
				</div>
				<div style={{ padding: 10 }}>
					<Story
						args={{
							name: 'category',
							label: 'Strategy',
							labelFor: 'strategy'
						}}
					/>
				</div>
			</div>
		)
	]
};
