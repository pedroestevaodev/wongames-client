'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProviderWrapper({
	children
}: React.PropsWithChildren) {
	return (
		<NextThemesProvider
			attribute="data-theme-mode"
			defaultTheme="light"
			themes={['light', 'dark']}
		>
			{children}
		</NextThemesProvider>
	);
}
