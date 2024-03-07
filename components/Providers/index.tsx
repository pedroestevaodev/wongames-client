import React from "react";
import GlobalStyles from "@/public/styles/global";
import ApolloProviderWrapper from "./ApolloProvider";
import NextUIProviderWrapper from "./NextUIProvider";
import ThemeProviderWrapper from "./ThemeProvider";

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
