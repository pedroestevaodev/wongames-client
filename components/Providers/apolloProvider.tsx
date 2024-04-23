'use client';

import React from "react";
import { 
	ApolloLink, 
	HttpLink,
} from "@apollo/client";
import { 
	ApolloNextAppProvider, 
	NextSSRApolloClient, 
	NextSSRInMemoryCache, 
	SSRMultipartLink 
} from "@apollo/experimental-nextjs-app-support/ssr";

const makeClient = () => {
	const httpLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_GRAPHQL_SCHEMA,
		fetchOptions: { cache: 'no-store' }
	});

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						games: {
							keyArgs: false,
							merge(existing = { data: [] }, incoming) {
								return {
									...incoming,
									data: [...existing.data, ...incoming.data]
								}
							},
						},
					},
				},
			},
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
