import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:1338/graphql',
	documents: ['graphql/**/*.ts', 'graphql/**/*.tsx'],
	ignoreNoDocuments: true,
	generates: {
		'./graphql/': {
			preset: 'client',
			plugins: []
		},
		'./graphql.schema.json': {
			plugins: ['introspection']
		}
	}
};

export default config;
