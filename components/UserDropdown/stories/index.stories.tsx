import { Meta, StoryObj } from '@storybook/react';
import UserDropdown, { UserDropwdownProps } from '@/components/UserDropdown';

export default {
	title: 'UserDropdown',
	component: UserDropdown,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<div
				style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
			>
				<Story />
			</div>
		)
	]
} as Meta<UserDropwdownProps>;

export const Default: StoryObj<UserDropwdownProps> = {
	args: {
		username: 'Pedro'
	}
};
