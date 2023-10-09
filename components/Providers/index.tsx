import { PropsWithChildren } from 'react';
import GlobalStyles from '@/public/styles/global';
import NextUIProviderWrapper from './nextUIProvider';
import ThemeProviderWrapper from './themeProvider';

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			<GlobalStyles />
			<NextUIProviderWrapper>
				<ThemeProviderWrapper>{children}</ThemeProviderWrapper>
			</NextUIProviderWrapper>
		</>
	);
}
