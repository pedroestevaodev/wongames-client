import React from 'react';
import GlobalStyles from '@/public/styles/global';
import NextUIProviderWrapper from './NextUIProvider';
import ThemeProviderWrapper from './ThemeProvider';
import ApolloProviderWrapper from './ApolloProvider';

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<ApolloProviderWrapper>
			<GlobalStyles />
			<NextUIProviderWrapper>
				<ThemeProviderWrapper>{children}</ThemeProviderWrapper>
			</NextUIProviderWrapper>
		</ApolloProviderWrapper>
	);
}
