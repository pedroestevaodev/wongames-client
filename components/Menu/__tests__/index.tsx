import React from 'react';
import { render } from '@testing-library/react';
import Menu from '..';

describe('<Menu />', () => {
	it('should render the menu', () => {
		render(<Menu />);
		// const { container } = render(<Menu />);

		// expect(screen.getByRole('heading', { name: /Menu/i })).toBeInTheDocument();

		// expect(container.firstChild).toMatchSnapshot();
	});

	// it('should render the menu labels', () => {
	//     render(<Menu />);

	//     expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
	//     expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
	//     expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
	// });

	// it('should render the open/close mobile menu', () => {
	//     render(<Menu />);

	//     const fullMenuElement = screen.getByRole('navigation', { hidden: true });

	//     expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
	//     expect(fullMenuElement).toHaveStyle({ opacity: 0 });
	// });
});
