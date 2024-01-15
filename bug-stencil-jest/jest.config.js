const esModules = ["@angular", "@testing-library/angular"];

module.exports = {
  transformIgnorePatterns: ["\\.(cjs)$", `node_modules/(?!${esModules?.join("|")})`],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  "testEnvironment": "jsdom",
  setupFiles: ["jest-canvas-mock"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        allowSyntheticDefaultImports: true,
      },
    ],
    "^.+\\.js$": "babel-jest",
  },
};
