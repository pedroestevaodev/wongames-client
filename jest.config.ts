/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "C:\\Users\\pedro\\AppData\\Local\\Temp\\jest",

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
		'<rootDir>/components/**/*.ts(x)?',
    '!<rootDir>/app/*.ts(x)?',
		'!<rootDir>/app/**/*.ts(x)?',
    '!<rootDir>/components/*.stories.ts(x)?',
		'!<rootDir>/components/**/*.stories.ts(x)?',
		'!<rootDir>/lib/**',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!**/stories/**',
		'!<rootDir>/out/**',
		'!<rootDir>/.next/**',
		'!<rootDir>/.storybook/**',
		'!<rootDir>/*.config.js',
		'!<rootDir>/*.config.ts',
		'!<rootDir>/*.config.mjs',
		'!<rootDir>/coverage/**',
		'!<rootDir>/.husky/**',
		'!<rootDir>/.github/**',
		'!<rootDir>/.swc/**',
		'!<rootDir>/.vscode/**',
		'!<rootDir>/generations/**',
		'!<rootDir>/old/**',
		'!<rootDir>/target/**',
		'!<rootDir>/@types/**',
		'!<rootDir>/graphql/**',
		'!<rootDir>/**/mocks/**',
	],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  extensionsToTreatAsEsm: [
    '.ts',
    '.tsx',
  ],

  // The default configuration for fake timers
  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  globals: {
    'babel-jest': {
      configFile: './babel.config.js',
    },
  },

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    'node_modules',
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
		'^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
		'^@/components/(.*)$': '<rootDir>/components/$1',
		'^styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    'next-auth/react': '<rootDir>/.jest/next-auth-authenticated.mock.ts',
    '@apollo/experimental-nextjs-app-support': '<rootDir>/.jest/apollo-experimental-nextjs.mock.ts',
    '^@types/web$': '<rootDir>/node_modules/@types/web',
	},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state before every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: {
    customExportConditions: [''],
  },

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.test.(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '!**/tests__/**/*.test.(ts|tsx|js|jsx)',
    '!**/_tests__/**/*.test.(ts|tsx|js|jsx)'
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.vscode/',
		'<rootDir>/.swc/',
		'<rootDir>/.next/',
		'<rootDir>/.github/',
		'<rootDir>/.husky/'
	],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
		'<rootDir>/node_modules/',
    '<rootDir>/services/auth.ts',
		'<rootDir>/.vscode/',
		'<rootDir>/.swc/',
		'<rootDir>/.next/',
		'<rootDir>/.github/',
		'<rootDir>/.husky/',
		'\\.pnp\\.[^\\\\]+$',
		'\\.webpack\\.[^\\\\]+$',
		'^.*\\.module\\.(css|sass|scss)$',
    '<rootDir>/node_modules/(?!superjson|@apollo/experimental-nextjs-app-support)',
    '<rootDir>/node_modules/(?!superjson|@apollo/experimental-nextjs-app-support).+\\.js$',
    '<rootDir>/node_modules/(?!next-auth)',
    '<rootDir>/node_modules/(?!@auth|next-auth)',
    '<rootDir>/node_modules/(?!(next-auth)/)',
    '<rootDir>/node_modules/(?!next-auth).+\\.js$',
    '<rootDir>/node_modules/(?!(next-auth|@auth/core|react/jsx-runtime)/)',
	],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};

export default createJestConfig(config);
