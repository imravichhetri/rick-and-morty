const config = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?)$',
  moduleFileExtensions: [ 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  collectCoverage: false,
  coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'html'],
  verbose: true,
  globals: {
    datashop: true,
    window: true,
    timers: 'fake',
    'babel-jest': {
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    "^@perseus/(.*)$": "<rootDir>/src/$1",
    "^@perseus-shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@perseus-elements/(.*)$": "<rootDir>/src/components/$1",
    "^@perseus-modules/(.*)$": "<rootDir>/src/modules/$1",
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?)$',
  transform: {
    '^.+\\.(js|jsx)$': ["babel-jest", { configFile: './babel.config.js' }],
  },
  transformIgnorePatterns: ["/node_modules[/\\\\].+\\.(js|jsx)"],
  verbose: true,
  moduleDirectories: ['node_modules', 'src/'],
};

module.exports = config;
