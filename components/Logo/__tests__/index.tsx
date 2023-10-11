import { render, screen } from '@testing-library/react';
import Logo from '@/components/Logo';

describe('<Logo />', () => {
	it('should render a white label by default', () => {
		render(<Logo hideOnMobile />);

		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: 'rgb(250 250 250 / var(--tw-text-opacity))'
		});
	});

	it('should render a black label when theme is dark', () => {
		render(<Logo />);

		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: 'rgb(10 13 39 / var(--tw-text-opacity))'
		});
	});

	it('should render a normal logo when size is default', () => {
		render(<Logo />);

		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			width: '11rem'
		});
	});

	it('should render a bigger logo', () => {
		render(<Logo size="large" />);

		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			width: '20rem'
		});
	});

	// it('should render a logo without text if hideOnMobile', () => {
	//     render(<Logo hideOnMobile />);

	//     expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
	//         'width',
	//         '5.8rem',
	//         {
	//             media: '(max-width: 768px)'
	//         }
	//     );
	// });
});
