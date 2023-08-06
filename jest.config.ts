import type { Config } from '@jest/types';

const unTranspiledModulePatterns = ['(jest-)?react-native', '@react-native/.*'];

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
  transformIgnorePatterns: [
    `node_modules/(?!${unTranspiledModulePatterns.join('|')})`,
  ],
  testMatch: ['**/?(*.)test.(js|jsx|ts|tsx)'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testTimeout: 10_000,
};

export default config;
