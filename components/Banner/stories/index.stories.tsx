import { Meta, StoryObj } from '@storybook/react';
import Banner, { BannerProps } from '@/components/Banner';

export default {
	title: 'Banner',
	component: Banner,
	argTypes: {
		ribbon: {
			type: 'string'
		}
	},
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		title: 'Defy death',
		subTitle:
			'<p>Play the new <strong className="text-primary font-bold">CrashLands</strong> season</p>',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death'
	},
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark'
		}
	},
	decorators: [
		(Story) => (
			<div style={{ width: '100%', height: '100vh' }}>
				<div
					style={{ maxWidth: '104rem', margin: '0 auto', padding: '50px 0' }}
				>
					<Story />
				</div>
			</div>
		)
	]
} as Meta<BannerProps>;

export const Default: StoryObj<BannerProps> = {};

export const WithRibbon: StoryObj<BannerProps> = {
	args: {
		ribbon: '20% OFF',
		ribbonSize: 'normal',
		ribbonColor: 'primary'
	}
};
