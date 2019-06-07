module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html?$',
      tsConfig: '<rootDir>/src/tsconfig.spec.json'
    }
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-init.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  roots: ['<rootDir>/src/'],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/app/$1',
    'assets/(.*)': '<rootDir>/src/assets/$1',
    '^@actions/(.*)$': 'app/actions/$1',
    '^@components/(.*)$': 'app/components/$1',
    '^@repositories/(.*)$': 'app/repositories/$1',
    '^@services/(.*)$': 'app/services/$1',
    '^@stores/(.*)$': 'app/stores/$1'
  },
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!**/*.spec.{js,ts}',
    '!**/node_modules/**',
    '!**/*.d.ts',
    '!**/*.module.ts'
  ],
  collectCoverage: true,
  coverageDirectory: './build/coverage',
  coverageReporters: ['cobertura', 'text'],
  testResultsProcessor: '<rootDir>/src/test/jest-trx-processor'
};
