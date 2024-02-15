import { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from '@/components/Checkbox';

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		onCheck: { action: 'checked' }
	},
	decorators: [
		(Story) => (
			<div
				style={{
					height: '100vh',
					width: '100vw',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#898888'
				}}
			>
				<div style={{ width: 'fit-content' }}>
					<Story />
				</div>
			</div>
		)
	]
} as Meta;

export const Default: StoryObj<CheckboxProps> = {
	render: (args) => (
		<>
			<div style={{ padding: 10 }}>
				<Checkbox name="category" label="Action" labelFor="action" {...args} />
			</div>
			<div style={{ padding: 10 }}>
				<Checkbox
					name="category"
					label="Adventure"
					labelFor="adventure"
					{...args}
				/>
			</div>
			<div style={{ padding: 10 }}>
				<Checkbox
					name="category"
					label="Strategy"
					labelFor="strategy"
					{...args}
				/>
			</div>
		</>
	)
};
