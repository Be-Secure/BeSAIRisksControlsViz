/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // For .js and .jsx files
    '^.+\\.m?js$': 'babel-jest', // For .js and .mjs files (ES Modules)
    '^.+\\.(ts|tsx)$': 'babel-jest', // For TypeScript files
  },
  transformIgnorePatterns: [
    '/node_modules/(?!d3|d3-array|d3-chord|d3-delaunay|d3-interpolate|d3-path|d3-scale|d3-shape|internmap|d3-dsv|d3-force|d3-format|d3-hierarchy|d3-random|d3-selection|d3-timer)/',
    '/\\.pnp\\.[^\\/]+$/', // If using pnpm
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom'
  ],
};