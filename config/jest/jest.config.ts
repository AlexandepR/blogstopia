/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^axios$': 'axios/dist/node/axios.cjs',
        '^@/(.*)$': '<rootDir>/src/$1',
        // '^app/(.*)$': '<rootDir>/src/app/$1',
        // '^pages/(.*)$': '<rootDir>/src/pages/$1',
        // '^shared/(.*)$': '<rootDir>/src/shared/$1',
        // '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
        // '^features/(.*)$': '<rootDir>/src/features/$1',
        // '^entities/(.*)$': '<rootDir>/src/entities/$1',
        // '^components/(.*)$': '<rootDir>/src/components/$1',
    },
    modulePaths: ['<rootDir>src'],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    rootDir: '../../',
};
