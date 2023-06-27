const { transform } = require("@babel/core");

module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
    transform: {
      "<transform_regex>": [`ts-jest`, { config: `tsconfig.jest.json` }],
    },
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|svg|ttf|woff|woff2)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`],
  testURL: `http://localhost`,
  resolver: `jest-webpack-resolver`,
  testEnvironment: `jsdom`,
};
