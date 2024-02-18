import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default {
	title: 'Form/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	argTypes: {
		children: {
			type: 'string'
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'select' }
		},
		minimal: {
			control: {
				type: 'boolean'
			}
		}
	}
} as Meta<ButtonProps>;

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
