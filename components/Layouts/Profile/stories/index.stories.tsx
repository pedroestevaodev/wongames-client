import { Meta, StoryObj } from '@storybook/react';
import Profile, { ProfileLayoutProps } from '@/components/Layouts/Profile';
import FormProfile from '@/components/FormProfile';

export default {
	title: 'Layout/Profile',
	component: Profile,
	parameters: {
		layout: 'fullscreen'
	},
	args: {
		children: <FormProfile />
	}
} as Meta<ProfileLayoutProps>;

export const Default: StoryObj<ProfileLayoutProps> = {};
