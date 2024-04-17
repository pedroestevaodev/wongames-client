'use client';

import React from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import { ApolloNextAppProvider, NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";
import { offsetLimitPagination } from "@apollo/client/utilities";

const makeClient = () => {
	const httpLink = new HttpLink({
		uri: process.env.GRAPHQL_SCHEMA,
		fetchOptions: { cache: 'no-cache' }
	});

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						// games: {
						// 	keyArgs: false,
						// 	merge(existing = [], incoming) {
						// 		return [...existing, ...incoming];
						// 	}
						// }
						games: offsetLimitPagination(),
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
