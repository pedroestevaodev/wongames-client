import { Meta, StoryObj } from '@storybook/react';
import Gallery, { GalleryProps } from '@/components/Gallery';
import items from '../mocks/mock';

export default {
	title: 'Gallery',
	component: Gallery,
	args: { items },
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
				<Story />
			</div>
		)
	]
} as Meta<GalleryProps>;

export const Default: StoryObj<GalleryProps> = {};
