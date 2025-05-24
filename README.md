<<<<<<< HEAD
# React + TypeScript + Vite

## Project Information

**Name:** Hafsa Metmari  
**Project:** React Lab – Product Components

---

## Dependencies

Make sure to install the necessary dependencies before running the project:

```bash
npm install
```
## Screens

### catalog page

![image](https://github.com/user-attachments/assets/733eaa02-85f1-461b-b774-9be9833d5e8c)

![image](https://github.com/user-attachments/assets/9385d2bd-064b-403c-9a4d-666d767031ef)


### details

![image](https://github.com/user-attachments/assets/2f7af178-9e19-4d81-9f52-db40dcf872b0)

![image](https://github.com/user-attachments/assets/c6ecaab4-fa37-42f3-869b-e1b20d735b0a)

![image](https://github.com/user-attachments/assets/819e3e7b-90bc-4c03-81df-6f499c0d25dd)

![image](https://github.com/user-attachments/assets/8bd19a62-3f33-40f3-bcb7-ae20a6ae8766)

![image](https://github.com/user-attachments/assets/975d24a6-edbb-4407-8150-bb6b2a829a2b)





This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
# Tp-React-Metmari-Hafsa
>>>>>>> a6d4b3ddb63845b94e78c9fc7ec5d9dac38b3c9d
