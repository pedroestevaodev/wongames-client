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
