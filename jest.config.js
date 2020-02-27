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
    '!**/*.module.ts'
  ],
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
  ]
};
