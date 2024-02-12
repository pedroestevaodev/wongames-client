import type { StorybookConfig } from '@storybook/nextjs';
// import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/nextjs',
		options: {
			builder: {
				useSWC: true
				// fsCache: true,
				// lazyCompilation: true
			}
		}
	},
	stories: [
		'../components/**/*.stories.@(ts|tsx)',
		'../app/**/*.stories.@(ts|tsx)'
	],
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				docs: false
			}
		}
	],
	typescript: {
		reactDocgen: 'react-docgen-typescript'
	},
	docs: {
		autodocs: 'tag'
	},
	staticDirs: ['../public'],
	core: {}
	// webpackFinal: async (config) => {
	// 	if (config.resolve) {
	// 		config.resolve.plugins = [
	// 			...(config.resolve.plugins || []),
	// 			new TsconfigPathsPlugin({
	// 				extensions: config.resolve.extensions
	// 			})
	// 		];
	// 	}
	// 	return config;
	// }
};
export default config;
