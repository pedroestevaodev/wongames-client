import { LoginSchema } from "@/schemas/authSchema";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                try {
                    const { email, password } = await LoginSchema.parseAsync(credentials);

                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            identifier: email,
                            password,
                        }),
                    });

                    const data = await response.json();

                    if (!response.ok || !data?.user || !data?.jwt) {
                        console.error("Strapi auth/local failed:", {
                            status: response.status,
                            error: data?.error || data,
                        });
                        return null;
                    }

                    return {
                        id: data.user.documentId || String(data.user.id),
                        documentId: data.user.documentId || String(data.user.id),
                        name: data.user.username,
                        email: data.user.email,
                        jwt: data.jwt,
                    };
                } catch (error) {
                    if (error instanceof ZodError) {
                        return null;
                    }

                    console.error("Unexpected auth authorize error:", error);
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/sign-in",
        signOut: "/sign-in",
    },
    callbacks: {
        session: async ({ token, session }) => {
            if (!session.user) {
                return session;
            }

            if (token.id) {
                session.user.id = token.id as string;
            }

            if (token.jwt) {
                session.user.jwt = token.jwt as string;
            }

            session.user.name = (token.name as string | undefined) ?? session.user.name;
            session.user.email = (token.email as string | undefined) ?? session.user.email;

            return session;
        },
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.documentId || user.id;
                token.name = user.name;
                token.email = user.email;
                token.jwt = user.jwt;
            }

            return token;
        },
    },
});
