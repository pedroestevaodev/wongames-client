import { ApolloLink, HttpLink } from "@apollo/client";
import {
	NextSSRApolloClient,
	NextSSRInMemoryCache,
	SSRMultipartLink
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const makeClient = () => {
	const httpLink = new HttpLink({
		uri: process.env.GRAPHQL_SCHEMA,
		fetchOptions: { cache: 'no-cache' }
	});

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link:
			typeof window === 'undefined'
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true
						}),
						httpLink
				  ])
				: httpLink
	});
};

export const { getClient } = registerApolloClient(() => {
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: new HttpLink({
			uri: process.env.GRAPHQL_SCHEMA
		})
	});
});

// export const { getClient } = registerApolloClient(() => {
//     return new ApolloClient({
//         cache: new InMemoryCache(),
//         link: new HttpLink({
//             uri: process.env.GRAPHQL_SCHEMA
//         }),
//     });
// });
