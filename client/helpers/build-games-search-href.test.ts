import { buildGamesSearchHref } from '@/helpers/build-games-search-href';

describe('buildGamesSearchHref()', () => {
	it('returns /games for empty terms', () => {
		expect(buildGamesSearchHref('')).toBe('/games');
		expect(buildGamesSearchHref('   ')).toBe('/games');
	});

	it('encodes the search term as name query param', () => {
		expect(buildGamesSearchHref('BioShock')).toBe('/games?name=BioShock');
		expect(buildGamesSearchHref(' call of ')).toBe('/games?name=call%20of');
	});
});
