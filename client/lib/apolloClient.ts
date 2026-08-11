import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { setContext } from '@apollo/client/link/context';
import { auth } from "@/services/auth";

export const { getClient } = registerApolloClient(() => {
	const httpLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_GRAPHQL_SCHEMA,
	});

	const authLink = setContext(async (_, { headers, authenticated, session: contextSession }) => {
		const shouldAuthenticate = authenticated === true || Boolean(contextSession);

		if (!shouldAuthenticate) {
			return { headers };
		}

		let jwt =
			contextSession?.jwt ||
			contextSession?.user?.jwt ||
			'';

		if (!jwt) {
			const session = await auth();
			jwt = session?.user?.jwt || '';
		}

		return {
			headers: {
				...headers,
				...(jwt ? { authorization: `Bearer ${jwt}` } : {}),
			},
		};
	});

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(httpLink),
	});
});
