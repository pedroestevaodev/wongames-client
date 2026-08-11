import { render, screen } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import NextProgressbar, { startProgress } from "@/components/NextProgressbar";

jest.mock('next/navigation', () => ({
	usePathname: jest.fn(() => '/'),
	useSearchParams: jest.fn(() => new URLSearchParams()),
}));

describe('<NextProgressbar />', () => {
	it('should show a visible progress bar when started', async () => {
		render(
			<>
				<NextProgressbar />
				<a href="/games">Explore</a>
			</>
		);

		startProgress();

		const bar = await screen.findByRole('progressbar', { name: /page loading/i });
		expect(bar).toBeInTheDocument();
		expect(bar).toHaveStyle({ height: '4px' });
	});

	it('should start on internal link click', async () => {
		const user = userEvent.setup();
		render(
			<>
				<NextProgressbar />
				<a href="/games">Explore</a>
			</>
		);

		await user.click(screen.getByRole('link', { name: /explore/i }));

		expect(
			await screen.findByRole('progressbar', { name: /page loading/i })
		).toBeInTheDocument();
	});
});
