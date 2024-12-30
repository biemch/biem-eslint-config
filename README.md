# @biem/eslint-config

A modern, shareable ESLint configuration by Biem, designed to enhance code quality and maintain consistency across JavaScript and TypeScript projects. Built using ESLint's flat config format, it leverages industry-leading plugins and best practices to provide a robust linting foundation for your applications.

---

## Installation

To add **@biem/eslint-config** to your project:

### Using npm:
```bash
npm install @biem/eslint-config --save-dev
```

### Using Yarn:
```bash
yarn add @biem/eslint-config --dev
```

---

## Usage

To use this configuration, create an `eslint.config.js` file in your project root and add the following:

```javascript
import config from "@biem/eslint-config";

export default [
  ...config,
];
```

### Overriding rules

You can override or extend the rules in your project by appending custom configurations to the `eslint.config.js` file:

```javascript
import config from "@biem/eslint-config";

export default [
  ...config,
  {
    rules: {
      "no-unused-vars": "warn", // Example override
    },
  },
];
```

---

## License

Distributed under the MIT License. See [LICENSE](https://github.com/biemch/biem-eslint-config/blob/master/LICENSE.md) for more details.

