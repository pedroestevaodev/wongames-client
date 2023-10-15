import { render, screen } from '@testing-library/react';
import Heading from '@/components/Heading';

describe('<Heading />', () => {
	it('should render a white label by default', () => {
		render(<Heading>Won Games</Heading>);

		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			color: 'rgb(250 250 250 / var(--tw-text-opacity))'
		});
	});

	it('should render a white label by default', () => {
		render(<Heading color="black">Won Games</Heading>);

		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			color: 'rgb(3 5 23 / var(--tw-text-opacity))'
		});
	});

	// Conflict
	// it('should render a heading with a line to the left side', () => {
	//     render(<Heading lineLeft>Won Games</Heading>);

	//     expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
	//         'border-left-width': '0.7rem',
	//         'border-left-color': 'rgb(60 211 193 / var(--tw-border-opacity))'
	//     });
	// });

	// Conflict
	// it('should render a heading with a line at the bottom', () => {
	//     render(<Heading lineLeft>Won Games</Heading>);

	//     expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
	//         'border-width': '0.5rem',
	//         'border-color': 'rgb(242 49 165 / var(--tw-border-opacity))'
	//     });
	// });
});
