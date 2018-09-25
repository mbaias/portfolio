module.exports = {  
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  parser: "babel-eslint",
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true, 
        trailingComma: 'all',
      },
    ],
    "no-console": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "react/prefer-stateless-function": 0,
    "no-unused-vars": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "consistent-return": 0,
    "react/no-array-index-key": 0
  }
};