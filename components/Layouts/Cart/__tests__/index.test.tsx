import { render, screen } from '@/utils/testsHelper';
import { expect } from '@jest/globals';
import Cart from "@/components/Layouts/Cart";
import highlightItems from "@/components/Highlight/mocks/mock";
import gameCardSliderItems from "@/components/GameCardSlider/mocks/mock";

const props = {
    session: {
        jwt: 'token',
        user: {
            email: 'won@games.com'
        },
        expires: '13234'
    },
    recommendedTitle: 'You may like these games',
    recommendedHighlight: highlightItems,
    recommendedGames: gameCardSliderItems
};

jest.mock('@/components/Layouts/Base', () => ({
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
        return <div data-testid="Mock Base">{children}</div>
    }
}));

jest.mock('@/components/Showcase', () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Showcase" />
    }
}));

jest.mock('@/components/CartList', () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Cart" />
    }
}));

jest.mock('@/components/PaymentForm', () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock PaymentForm" />
    }
}));

jest.mock('@/components/Empty', () => ({
    __esModule: true,
    default: function Mock() {
        return <div data-testid="Mock Empty" />
    }
}));

describe('<Cart />', () => {
    it('should render sections', () => {
        render(<Cart {...props} />);

        expect(
            screen.getByRole('heading', { name: /my cart/i })
        ).toBeInTheDocument();
        expect(screen.getByTestId('Mock Cart')).toBeInTheDocument();
        expect(screen.getByTestId('Mock PaymentForm')).toBeInTheDocument();
        expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
        expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument();
    });
});