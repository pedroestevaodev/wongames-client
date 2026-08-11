/**
 * Build the /games href for a header search term.
 * Empty terms go to the unfiltered catalog.
 */
export const buildGamesSearchHref = (term: string): string => {
	const trimmed = term.trim();

	if (!trimmed) {
		return '/games';
	}

	return `/games?name=${encodeURIComponent(trimmed)}`;
};
