# 🌟 @imjustlucas/shared-types 🌟

Welcome to the **Shared Types** package, a centralized repository of TypeScript interfaces and types designed to bring consistency and reusability to your TypeScript projects. Perfect for teams looking to maintain a common understanding and structure across various modules and projects.

## Features 🌟

- 🔄 **Reusability**: Easily import shared types across different projects.
- 🎯 **Consistency**: Ensure consistent type definitions across your codebase.
- 🛠 **Maintainability**: Update common types in one place to reflect across all projects.

## Installation 💾

First, you need to configure the package registry in your `.npmrc` file at the root of your project:

```bash
@imjustlucas:registry=https://npm.pkg.github.com
```

Then, install the package by running the following command in your terminal:

```bash
npm install @yourorg/shared-types --save-dev
```

Or if you are using Yarn:

```bash
yarn add @yourorg/shared-types --dev
```

Or if you are using pnpm:

```bash
pnpm install @yourorg/shared-types --save-dev
```

## Usage 📘

Import and use the shared types in your TypeScript files as follows:

```typescript
import { SomeSharedType, AnotherSharedType } from "@yourorg/shared-types";

const myVar: SomeSharedType = {
  // Your code here...
};
```

## Contributing 🤝

We welcome contributions to enhance the shared types, add new ones, or improve documentation. If you'd like to contribute, please fork the repository and submit a pull request.

## License 📜

This project is licensed under the [INSERT LICENSE TYPE HERE]. See the `LICENSE` file for more details.
