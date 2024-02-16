import { Meta, StoryObj } from '@storybook/react';
import Gallery, { GalleryProps } from '@/components/Gallery';
import items from '../mocks/mock';

export default {
	title: 'Gallery',
	component: Gallery,
	args: { items },
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<div style={{ width: '100%', height: '100vh', padding: '150px 0' }}>
				<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
					<Story />
				</div>
			</div>
		)
	]
} as Meta<GalleryProps>;

export const Default: StoryObj<GalleryProps> = {};
