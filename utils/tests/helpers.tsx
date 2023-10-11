import { ThemeProvider } from 'next-themes';
import { render, RenderResult } from '@testing-library/react';
import React, { ReactNode } from 'react';

export const renderWithTheme = (children: ReactNode): RenderResult =>
	render(
		<ThemeProvider
			attribute="data-theme-mode"
			defaultTheme="light"
			themes={['light', 'dark']}
		>
			{children}
		</ThemeProvider>
	);
