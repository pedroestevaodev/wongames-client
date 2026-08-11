/**
 * Resolve a safe post-auth redirect target.
 * Only same-origin relative paths are allowed (open-redirect protection).
 */
export const resolvePostAuthRedirect = (
	callbackUrl: string | null | undefined,
	fallback: string
): string => {
	if (!callbackUrl) {
		return fallback;
	}

	if (!callbackUrl.startsWith('/') || callbackUrl.startsWith('//')) {
		return fallback;
	}

	return callbackUrl;
};
