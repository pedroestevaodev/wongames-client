import { Meta, StoryObj } from '@storybook/react';
import CardsList, { CardsListProps } from '@/components/CardsList';
import paymentOptionsMock from '@/components/PaymentOptions/mocks/mock';
import { fn } from "@storybook/test";

export default {
	title: 'Profile/CardsList',
	component: CardsList,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	args: {
		cards: paymentOptionsMock,
		onClick: fn()
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 850, margin: 'auto' }}>
				<Story />
			</div>
		)
	]
} as Meta<CardsListProps>;

export const Default: StoryObj<CardsListProps> = {};
