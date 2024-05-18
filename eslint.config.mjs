import config from "eslint-config-standard";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  ...[].concat(config),
  eslintConfigPrettier,

  {
    ignores: ["node_modules", "dist", ".src/config"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
