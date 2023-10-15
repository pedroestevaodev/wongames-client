import { render, screen } from '@testing-library/react';
import Logo from '@/components/Logo';
// import 'jest-styled-components';

describe('<Logo />', () => {
	it('should render a white label by default', () => {
		render(<Logo />);

		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: 'rgb(250 250 250 / var(--tw-text-opacity))'
		});
	});

	it('should render a black label when theme is dark', () => {
		render(<Logo color="black" />);

		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: 'rgb(3 5 23 / var(--tw-text-opacity))'
		});
	});

	// it('should render a normal logo when size is default', () => {
	// 	render(<Logo />);

	// 	expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
	// 		width: '11rem'
	// 	});
	// });

	// it('should render a bigger logo', () => {
	// 	render(<Logo size="large" />);

	// 	expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
	// 		width: '20rem'
	// 	});
	// });

	// Conflict
	// it('should render a bigger logo without text if hideOnMobile', () => {
	//     render(<Logo hideOnMobile />);

	//     expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule('width', '5.8rem', {
	//         media: '(max-width: 768px)'
	//     });
	// });
});
