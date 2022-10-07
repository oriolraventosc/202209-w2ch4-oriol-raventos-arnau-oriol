module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    es2022: "latest",
    sourceType: "module",
  },
  rules: { "no-plusplus": "off" },
};
