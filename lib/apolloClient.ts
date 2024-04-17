import { HttpLink } from "@apollo/client";
import {
	NextSSRApolloClient,
	NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: new HttpLink({
			uri: process.env.GRAPHQL_SCHEMA
		}),
		// cache: new NextSSRInMemoryCache({
		// 	typePolicies: {
		// 		Query: {
		// 			fields: {
		// 				games: {
		// 					// keyArgs: ["pagination"],
		// 					// merge(existing, incoming) {
		// 					// 	return {
		// 					// 		...incoming,
		// 					// 		data: [...(existing?.data || []), ...incoming.data],
		// 					// 	};
		// 					// },

		// 					// keyArgs: ["filters"],
		// 					// merge(existing, incoming) {
		// 					// 	return {
		// 					// 		...incoming,
		// 					// 		data: [...(existing?.data || []), ...incoming.data],
		// 					// 	};
		// 					// },

		// 					// keyArgs: false,
		// 					// merge(existing, incoming) {
		// 					// 	return {
		// 					// 		...incoming,
		// 					// 		data: [...(existing?.data || []), ...incoming.data],
		// 					// 	};
		// 					// },

		// 					// read(existing, { args: { start, limit } = {} }) {
		// 					// 	return existing && existing?.slice(start, start + limit);
		// 					// },
		// 					// keyArgs: false,
		// 					// merge(existing = [], incoming) {
		// 					// 	return [...existing, ...incoming];
		// 					// },

		// 					// read(existing, {
		// 					// 	// variables: {
		// 					// 	// 	start = 0,
		// 					// 	// 	limit: limit = 15,
		// 					// 	// } = {
		// 					// 	// 	start: 0,
		// 					// 	// 	limit: 15,
		// 					// 	// },
		// 					// 	variables: {
		// 					// 		start = 0,
		// 					// 		limit = existing?.length || 15,
		// 					// 	} = {},
		// 					// }) {
		// 					// 	return existing && existing?.slice(start, start + limit);
		// 					// },
		// 					// keyArgs: false,
		// 					// merge(existing, incoming, { variables: { start = 0 }}) {
		// 					// 	const merged = existing ? existing.slice(0) : [];
		// 					// 	for (let i = 0; i < incoming.length; ++i) {
		// 					// 		merged[start + i] = incoming[i];
		// 					// 	}
		// 					// 	return merged;
		// 					// },
		// 				},
		// 			},
		// 		},
		// 	},
		// }),
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
