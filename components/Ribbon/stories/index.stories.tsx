import { Meta, StoryObj } from '@storybook/react';
import Ribbon from '@/components/Ribbon';

export default {
	title: 'Ribbon',
	component: Ribbon,
	argTypes: {
		children: {
			type: 'string'
		}
	}
} as Meta;

export const Default: StoryObj = {
	decorators: [
		(story) => (
			<div
				style={{
					width: '40rem',
					height: '20rem',
					position: 'relative',
					backgroundColor: '#888'
				}}
			>
				<Ribbon>{story()}</Ribbon>
			</div>
		)
	]
};
