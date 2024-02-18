import { Meta, StoryObj } from '@storybook/react';
import PaymentOptions, {
	PaymentOptionsProps
} from '@/components/PaymentOptions';
import paymentOptionsMock from '../mocks/mock';

export default {
	title: 'Payment/PaymentOptions',
	component: PaymentOptions,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark'
		}
	},
	args: {
		cards: paymentOptionsMock
	},
	argTypes: {
		handlePayment: {
			action: 'clicked'
		}
	}
} as Meta<PaymentOptionsProps>;

export const Default: StoryObj<PaymentOptionsProps> = {
	decorators: [
		(Story) => (
			<div style={{ padding: 16, maxWidth: 400 }}>
				<Story />
			</div>
		)
	]
};
