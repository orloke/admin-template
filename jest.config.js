module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTest.ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!**/node_modules/**',
    '!**/data/**',
    '!**/.next/**',
    '!**/dist/**',
    '!**/*.d.ts',
    '!src/**/*.spec.tsx',
    '!src/**/*_app.tsx',    
  ],
  coverageReporters: ['lcov', 'json']
};
