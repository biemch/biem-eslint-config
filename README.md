# @biem/eslint-config

<p align="center">
  <a aria-label="NPM version" href="hhttps://www.npmjs.com/package/@biem/eslint-config">
    <img alt="" src="https://img.shields.io/npm/v/%40biem%2Feslint-config?style=for-the-badge&labelColor=000000&color=008bf8">
  </a>
  <a aria-label="Bundle size" href="hhttps://www.npmjs.com/package/@biem/eslint-config">
    <img alt="" src="https://img.shields.io/bundlephobia/min/%40biem%2Feslint-config?style=for-the-badge&labelColor=000000&color=dc0073">
  </a>
  <a aria-label="License" href="https://github.com/biemapp/biem-eslint-config/blob/master/LICENSE.md">
    <img alt="" src="https://img.shields.io/npm/l/%40biem%2Feslint-config?style=for-the-badge&labelColor=000000&color=04e762">
  </a>
</p>

This package provides Biem's shared ESLint configuration, aimed at enhancing code quality and consistency across JavaScript and TypeScript projects. It encapsulates best practices and conventions adopted by Biem, leveraging the power of ESLint along with a curated selection of plugins to enforce a comprehensive coding standard.

## Features

- **Extensible configuration**: Easily extendable to fit any project's specific needs.
- **Support for modern JavaScript and TypeScript**: Out-of-the-box support for JavaScript ES6+ and TypeScript.
- **Integration with Airbnb's ESLint config**: Inherits from the widely adopted `eslint-config-airbnb-base` and `eslint-config-airbnb-typescript`, ensuring a solid foundation for code quality and style.
- **React and JSX a11y support**: Includes rules from `eslint-plugin-react` and `eslint-plugin-jsx-a11y` for optimal React development practices.
- **Tailwind CSS support**: Utilizes `eslint-plugin-tailwindcss` to maintain consistency and best practices in Tailwind CSS applications.
- **Imports and sorting**: Employs `eslint-plugin-import`, `eslint-plugin-simple-import-sort`, and `eslint-plugin-unused-imports` for managing and auto-sorting import statements.
- **Code quality plugins**: Incorporates `eslint-plugin-perfectionist` and other plugins to elevate code quality.

## Installation

To install @biem/eslint-config, run the following command in your project directory:

```bash
npm install @biem/eslint-config --save-dev
```

Or, if you prefer yarn:

```bash
yarn add @biem/eslint-config --dev
```

## Usage

1. **Basic setup**: Add @biem/eslint-config to your project's ESLint configuration file:

```json
{
  "extends": "@biem/eslint-config"
}
```

2. **TypeScript projects**: Ensure peer dependencies are installed for full TypeScript support.

## Customization

To override or extend the rules, modify your ESLint configuration file:

```json
{
  "extends": "@biem/eslint-config",
  "rules": {
    // Your custom rules
  }
}
```

## Contributing

We encourage contributions from the community to make @biem/eslint-config even better. If you're interested in contributing, please:

- Report bugs and suggest features through [GitHub issues](https://github.com/biemapp/biem-eslint-config/issues).

## License

Distributed under the MIT License. See [LICENSE](https://github.com/biemapp/biem-eslint-config/blob/master/LICENSE.md) for more information.

## Acknowledgments

- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) for TypeScript support.
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) for base JavaScript style guide.
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) and others for enhancing ESLint's capabilities.

For a full list of dependencies and their purposes, please refer to our [package.json](https://github.com/biemapp/biem-eslint-config/blob/master/package.json) file.

---

Crafted with ❤ by the [Biem](https://github.com/biemapp) team.
