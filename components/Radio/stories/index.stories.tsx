import { Meta, StoryObj } from '@storybook/react';
import Radio, { RadioProps } from '@/components/Radio';

export default {
	title: 'Form/Radio',
	component: Radio,
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

export const Default: StoryObj<RadioProps> = {
	decorators: [
		(Story) => (
			<div style={{ height: '100vh', width: '100vw' }}>
				<div style={{ padding: 10 }}>
					<Story
						args={{
							label: 'primeiro',
							labelFor: 'primeiro',
							id: 'primeiro',
							name: 'nome',
							value: 'primeiro',
							defaultChecked: true
						}}
					/>
				</div>
				<div style={{ padding: 10 }}>
					<Story
						args={{
							label: 'segundo',
							labelFor: 'segundo',
							id: 'segundo',
							name: 'nome',
							value: 'segundo'
						}}
					/>
				</div>
				<div style={{ padding: 10 }}>
					<Story
						args={{
							label: 'terceiro',
							labelFor: 'terceiro',
							id: 'terceiro',
							name: 'nome',
							value: 'terceiro'
						}}
					/>
				</div>
			</div>
		)
	]
};
