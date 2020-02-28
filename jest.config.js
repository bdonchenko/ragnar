module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "<rootDir>/src/test/setupJest.ts"
  ],
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!**/*.spec.{js,ts}',
    '!**/node_modules/**',
    '!**/*.d.ts',
    '!**/*.module.ts',
    '!**/*.store.ts',
    '!src/repositories'
  ],
  resolver: "jest-resolver-tsconfig-paths",
  collectCoverage: true,
  coverageDirectory: './dist/coverage',
  coverageReporters: ['cobertura', 'text'],
  "reporters": [
    "default",
    [
      "jest-trx-results-processor",
      {
        "outputFile": "dist/coverage/test-results.trx", // defaults to "test-results.trx"
        "defaultUserName": "ragnar" // defaults to "anonymous"
      }
    ]
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    },
    "./src/app/services/": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    },
    "./src/app/pages/**/*.command.ts": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    },
    "./src/app/pages/**/*.component.ts": {
      "branches": 100,
      "functions": 100,
      "lines": 50,
      "statements": 100
    }
  }
};
