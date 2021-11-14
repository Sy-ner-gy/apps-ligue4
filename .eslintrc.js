module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier", "html"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": 0,
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    quotes: ["error", "double"],
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    indent: ["error", 2],
  },
};
