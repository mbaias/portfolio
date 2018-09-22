module.exports = {  
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
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
  }
};