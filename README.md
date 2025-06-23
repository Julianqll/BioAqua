# React Template(Using Vite and Mantine)
Template designed to provide a simple react app, set up with vite, and using Mantine library. Feel free to fork it, use it and modify it according to your needs, use the folder distribution in the repository as a guide to add your files.

## Mantine
Check out about [Mantine](https://mantine.dev/) documentation and its components, as well as their additional packages.

# Setup
1. Fork the repository, clone it with
    ```bash
    git clone https://github.com/<username>/templateReact
    ```
    Or just use the repository as template by clicking the "Use this template" button, and following the steps there.

2. Go to the corresponding folder
    ```bash
    cd templateReact
    ```
3. Make sure you have [Node.js](https://nodejs.org/en) installed (+ v.18), and run
    ```bash
    npm install
    ```
4. Once installed, you can now start the development server
    ```bash
    npm run dev
    ```
# Other Vite documentation
## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
