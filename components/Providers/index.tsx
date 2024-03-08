import React from "react";
import GlobalStyles from "@/public/styles/global";
import ApolloProviderWrapper from "./apolloProvider";
import NextUIProviderWrapper from "./nextUIProvider";
import ThemeProviderWrapper from "./themeProvider";

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
