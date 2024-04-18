'use client';

import React from "react";
import { 
	ApolloLink, 
	HttpLink,
} from "@apollo/client";
import { 
	concatPagination, 
	// offsetLimitPagination
} from "@apollo/client/utilities";
import { 
	ApolloNextAppProvider, 
	NextSSRApolloClient, 
	NextSSRInMemoryCache, 
	SSRMultipartLink 
} from "@apollo/experimental-nextjs-app-support/ssr";

const makeClient = () => {
	const httpLink = new HttpLink({
		uri: 'http://localhost:1337/graphql',
		fetchOptions: { cache: 'no-store' }
	});

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						// games: {
						// 	keyArgs: false,
						// 	merge(existing = [], incoming) {
						// 		if (Array.isArray(incoming)) {
						// 			return [...existing, ...incoming];
						// 		} else {
						// 			return existing;
						// 		}
						// 	}
						// }
						games: concatPagination(),
						// games: offsetLimitPagination(),
					}
				}
			}
		}),
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

export default function ApolloProviderWrapper({
	children
}: React.PropsWithChildren) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
}
