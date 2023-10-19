import { Meta, StoryObj } from '@storybook/react';
import Banner from '@/components/Banner';

export default {
	title: 'Banner',
	component: Banner,
	argTypes: {}
} as Meta;

export const Default: StoryObj = {
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
