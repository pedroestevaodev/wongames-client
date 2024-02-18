import { Meta, StoryObj } from '@storybook/react';
import ExploreSidebar, {
	ExploreSidebarProps
} from '@/components/ExploreSidebar';
import items from '../mocks/mock';

export default {
	title: 'ExploreSidebar',
	component: ExploreSidebar,
	args: { items },
	parameters: {
		layout: 'fullscreen'
	},
	decorators: [
		(Story) => (
			<div style={{ padding: 16, maxWidth: 320 }}>
				<Story />
			</div>
		)
	]
} as Meta<ExploreSidebarProps>;

export const Default: StoryObj<ExploreSidebarProps> = {};

export const WithInitialValues: StoryObj<ExploreSidebarProps> = {
	args: {
		initialValues: {
			windows: true,
			sort_by: 'low-to-high'
		}
	}
};
