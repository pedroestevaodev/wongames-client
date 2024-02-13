import React from 'react';
import type { Preview, StoryFn } from '@storybook/react';
import StyledComponentsRegistry from '../lib/registry';
import { Providers } from '../components/Providers';
import GlobalStyles from '../public/styles/global';
import { withThemeByClassName } from '@storybook/addon-styling';

export const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		backgrounds: {
			default: 'won-light',
			values: [
				{
					name: 'won-light',
					value: '#FAFAFA'
				},
				{
					name: 'won-dark',
					value: '#06092B'
				}
			]
		}
	}
};

export const decorators: Parameters<StoryFn<unknown>>[0][] = [
	(Story: React.ComponentType) => (
		<StyledComponentsRegistry>
			<Providers>
				<GlobalStyles removeBg />
				<Story />
			</Providers>
		</StyledComponentsRegistry>
	),
	withThemeByClassName({
		themes: {
			light: 'light',
			dark: 'dark'
		},
		defaultTheme: 'light'
	})
];
