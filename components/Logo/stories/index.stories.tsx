import { Meta, StoryObj } from '@storybook/react';
import Logo, { LogoProps } from '@/components/Logo';

export default {
	title: 'Logo',
	component: Logo,
	argTypes: {}
} as Meta;

export const Default: StoryObj<LogoProps> = {};
