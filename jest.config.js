module.exports = {
  testEnvironment: 'node',
  transform: {},
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.[jt]s?$',
  moduleFileExtensions: ['js', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8'
};