/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/styles.css",
  tailwindFunctions: ["clsx", "cn", "twMerge"],
};

export default config;
