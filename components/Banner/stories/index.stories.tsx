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
		layout: 'fullscreen'
	}
} as Meta;

export const Default: StoryObj<BannerProps> = {
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		title: 'Defy death',
		subTitle:
			'<p>Play the new <strong className="text-primary font-bold">CrashLands</strong> season</p>',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death'
	},
	parameters: {
		layout: 'fullscreen'
	}
};

export const WithRibbon: StoryObj<BannerProps> = {
	argTypes: {
		ribbon: {
			type: 'string'
		}
	},
	decorators: [
		() => (
			<div style={{ maxWidth: '104rem', margin: '0 auto' }}>
				<Banner
					img="https://source.unsplash.com/user/willianjusten/1042x580"
					title="Defy death"
					subTitle='<p>Play the new <strong className="text-primary font-bold">CrashLands</strong> season</p>'
					buttonLabel="Buy now"
					buttonLink="/games/defy-death"
					ribbon="20% OFF"
					ribbonColor="primary"
					ribbonSize="normal"
				/>
			</div>
		)
	]
};
