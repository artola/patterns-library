module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/dist/**',
    '!**/lib/**',
    '!**/demo/**',
    '!**/00-materials/icons/**',
    '!**/00-materials/images/**',
    '!**/ui.test.js',
    '!**/story.js',
    '!**/index.react.js',
  ],
  coverageDirectory: '.coverage',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/unit.test.{js,jsx,mjs}',
  ],
  transform: {
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
    '^.+\\.(js|jsx)$': '<rootDir>config/jest/jestPreprocess.js',
  },
  transformIgnorePatterns: [
    '/node_modules\\/(?![lit\\-element|lit\\-html])/',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
};
