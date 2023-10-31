import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string'
		}
	}
} as Meta;

export const Default: StoryObj<ButtonProps> = {
	args: {
		children: 'Buy now'
	}
};

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		size: 'small',
		children: 'Buy now',
		icon: <FontAwesomeIcon icon={faCartShopping} />
	}
};

export const AsLink: StoryObj<ButtonProps> = {
	args: {
		size: 'large',
		children: 'Buy now',
		as: 'a',
		href: '/link'
	}
};
