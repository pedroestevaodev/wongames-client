'use client';

import React from 'react';
import theme from '@/public/styles/theme';
import { ThemeProvider } from 'styled-components';

export default function ThemeStyleProviderWrapper({
	children
}: {
	children: React.ReactNode;
}) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
