export { };
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },

    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts',
        '!**/vendor/**'],
    coverageDirectory: 'coverage',
    transform: {
        ".(ts|tsx)": "ts-jest"
    },

    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/coverage",
        "package.json",
        "package-lock.json",
        "reportWebVitals.ts",
        "setupTests.ts",
        "index.tsx"
    ],
    setupFilesAfterEnv: [
        '<rootDir>/setupTests.ts',
    ]
};
