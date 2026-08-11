/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/games",
    "/forgot-password",
    "/reset-password",
];

/**
 * Dynamic public path prefixes (e.g. game detail pages).
 */
export const publicRoutePrefixes = [
    "/game/",
];

/**
 * Check whether a pathname is publicly accessible.
 */
export const isPublicRoute = (pathname: string): boolean => {
    if (publicRoutes.includes(pathname)) {
        return true;
    }

    return publicRoutePrefixes.some(
        (prefix) => pathname === prefix.slice(0, -1) || pathname.startsWith(prefix)
    );
};

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to home
 * @type {string[]}
 */
export const authRoutes = [
    "/sign-in",
    "/sign-up",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
