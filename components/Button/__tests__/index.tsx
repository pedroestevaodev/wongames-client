import { render } from '@testing-library/react';
import Button from '@/components/Button';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

describe('<Button />', () => {
	it('should render the heading', () => {
		const { container } = render(<Button />);

		// expect(screen.getByRole('button', { name: /Buy now/i })).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	// it('should render the medium size by default', () => {
	//     const { container } = render(<Button>Buy now</Button>)

	//     expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
	//         height: '4rem',
	//         padding: '0.8rem 3.2rem',
	//         'font-size': '1.4rem'
	//     });

	//     expect(container.firstChild).toMatchSnapshot();
	// });

	// it('should render the small size', () => {
	//     render(<Button size="small">Buy now</Button>);

	//     expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
	//         'font-size': '1.2rem',
	//         height: '3rem',
	//     });
	// });

	// it('should render the large size', () => {
	//     render(<Button size="large">Buy now</Button>);

	//     expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
	//         'font-size': '1.6rem',
	//         height: '6rem',
	//         padding: '0.8rem 4.8rem',
	//     });
	// });

	// it('should render a fullWidth version', () => {
	//     render(<Button fullWidth>Buy now</Button>);

	//     expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
	//         width: '100%'
	//     });
	// });

	// it('should render an icon version', () => {
	//     render(<Button icon={<FontAwesomeIcon icon={faCartShopping} data-testid="icon" />}>Buy now</Button>);

	//     expect(screen.getByText(/buy now/i)).toBeInTheDocument();
	//     expect(screen.getByTestId('icon')).toBeInTheDocument();
	// });
});
