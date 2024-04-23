import React, { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { Providers } from '@/components/Providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'React Avançado - Boilerplate',
	description:
		'A simple project starter to work with TypeScript, React, NextJS and Styled Components',
	icons: '/img/icon-512.png',
	manifest: 'manifest.json'
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<body>
				<StyledComponentsRegistry>
					<Providers>{children}</Providers>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
