import React from "react";
import GlobalStyles from "@/public/styles/global";
import ApolloProviderWrapper from "@/components/Providers/ApolloProvider";
import NextUIProviderWrapper from "@/components/Providers/NextUIProvider";
import ThemeProviderWrapper from "@/components/Providers/ThemeProvider";

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
