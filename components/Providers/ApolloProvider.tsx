'use client';

import React from 'react';
import { ApolloLink, HttpLink } from '@apollo/client';
import {
	ApolloNextAppProvider,
	NextSSRInMemoryCache,
	NextSSRApolloClient,
	SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr';

const makeClient = () => {
	const httpLink = new HttpLink({
		uri: 'http://localhost:1337/graphql',
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

export default function ApolloProviderWrapper({
	children
}: React.PropsWithChildren) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
}
