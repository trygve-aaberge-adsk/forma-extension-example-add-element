module.exports = {
  root: true,
  env: { node: true, es6: true },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      rules: {
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/non-nullable-type-assertion-style": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
    {
      files: ["*.js", "*.jsx", "*.cjs"],
    },
  ],
}
