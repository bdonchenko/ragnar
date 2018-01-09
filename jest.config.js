module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      tsConfigFile: 'test/tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true
  },
  setupTestFrameworkScriptFile: '<rootDir>/test/jest-init.ts',
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  roots: ['<rootDir>/src/'],
  //setupFiles: ['<rootDir>/test/jest-pretest.ts'],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/app/$1',
    'assets/(.*)': '<rootDir>/src/assets/$1',
    'environments/(.*)': '<rootDir>/src/environments/$1',
    'environment(.*)': '<rootDir>/environments/tests.js'
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!**/*.spec.{js,ts}',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
  coverageDirectory: './test/coverage',
  coverageReporters: ['cobertura'],
  mapCoverage: true,
  testResultsProcessor: './test/jest-trx-processor'
};
