# 🌟 @imjustlucas/ts-config 🌟

Welcome to **@imjustlucas/ts-config** - your ultimate solution for kickstarting TypeScript projects with zero hassle! 🚀 This package brings together a collection of pre-configured TypeScript settings tailored for various development environments. Whether you're building backend services with Node.js, crafting sleek UIs with React, or venturing into the general web landscape, we've got you covered. Embrace the power of standardized configurations and elevate your coding experience to new heights! 🎉

## Features ✨

- 📦 Ready-to-use TypeScript configurations for different environments.
- 🛠 Easy to extend and customize to fit your project's needs.
- 🚀 Includes tweaks for enhancing compatibility and boosting performance.

## Installation 💻

Get started by installing the package in your project. Run the following command in your terminal:

```bash
npm install @imjustlucas/ts-config --save-dev
```

```bash
yarn add @imjustlucas/ts-config --dev
```

```bash
pnpm add @imjustlucas/ts-config --save-dev
```

## Usage 📘

To integrate one of the TypeScript configurations into your project, simply reference it in your tsconfig.json. For instance, to adopt the standard configuration for Node.js projects, add:

```json
{
  "extends": "@imjustlucas/ts-config/base.json",
  "compilerOptions": {
    // Your custom compiler options go here
  }
}
```

Replace "@imjustlucas/ts-config/base.json" with the path to the desired configuration. Here are the configurations at your disposal:

- api.json: Optimized for Node.js backend services.
- next-page-router.json: Tailored for Next.js projects with page routing.

## Customization 🛠

Tailoring the configurations to meet your project's unique requirements is a breeze. For example, to change the output directory, simply add your compilerOptions in tsconfig.json:

```json
{
  "extends": "@imjustlucas/ts-config/base.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make to enhance existing configurations or add new ones are greatly appreciated. Check out our contribution guidelines in CONTRIBUTING.md.

## License 📝

Distributed under the MIT License. See LICENSE for more information.