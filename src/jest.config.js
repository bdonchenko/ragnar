module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      tsConfigFile: '<rootDir>/src/tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/test/jest-init.ts',
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  roots: ['<rootDir>/src/'],
  //setupFiles: ['<rootDir>/test/jest-pretest.ts'],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/app/$1',
    'assets/(.*)': '<rootDir>/src/assets/$1'
  },
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!**/*.spec.{js,ts}',
    '!**/node_modules/**',
    '!**/*.d.ts',
    '!**/*.module.ts',
  ],
  collectCoverage: true,
  coverageDirectory: './build/coverage',
  coverageReporters: ['cobertura', 'text'],
  testResultsProcessor: '<rootDir>/src/test/jest-trx-processor'
};
