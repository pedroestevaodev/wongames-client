import { resolvePostAuthRedirect } from '../auth-redirect';

describe('resolvePostAuthRedirect()', () => {
	it('returns fallback when callback is missing', () => {
		expect(resolvePostAuthRedirect(null, '/')).toBe('/');
		expect(resolvePostAuthRedirect(undefined, '/games')).toBe('/games');
	});

	it('allows relative same-origin paths', () => {
		expect(resolvePostAuthRedirect('/wishlist', '/')).toBe('/wishlist');
		expect(resolvePostAuthRedirect('/games?price=50', '/')).toBe('/games?price=50');
	});

	it('rejects open redirects', () => {
		expect(resolvePostAuthRedirect('https://evil.com', '/')).toBe('/');
		expect(resolvePostAuthRedirect('//evil.com', '/')).toBe('/');
		expect(resolvePostAuthRedirect('javascript:alert(1)', '/')).toBe('/');
	});
});
