import React from "react";
import GlobalStyles from "@/public/styles/global";
import ApolloProviderWrapper from "@/components/Providers/apolloProvider";
import NextUIProviderWrapper from "@/components/Providers/nextUIProvider";
import ThemeProviderWrapper from "@/components/Providers/themeProvider";

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
