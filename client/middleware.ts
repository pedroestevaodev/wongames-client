import { auth } from "@/services/auth";
import { NextResponse } from "next/server";
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, isPublicRoute } from "./routes";

export default auth((req) => {
    const { pathname } = req.nextUrl;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
    const isAuthRoute = authRoutes.includes(pathname);

    if (isApiAuthRoute) {
        return undefined;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl));
        }

        return undefined;
    }

    if (!isLoggedIn && !isPublicRoute(pathname)) {
        let callbackUrl = pathname;

        if (req.nextUrl.search) {
            callbackUrl += req.nextUrl.search;
        }

        const encodedCallbackUrl = encodeURIComponent(callbackUrl);

        return NextResponse.redirect(new URL(`/sign-in?callbackUrl=${encodedCallbackUrl}`, req.nextUrl));
    }

    return undefined;
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
