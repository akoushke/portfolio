# Rollup

---

[`Rollup`](https://rollupjs.org/) is an open-source JavaScript module bundler that focuses on creating smaller, more efficient bundles. It is commonly used for building libraries and applications where code splitting and tree-shaking are essential for optimizing the final output.

Rollup operates on the principle of tree-shaking, a process that eliminates unused code during bundling, resulting in smaller and more performant bundles. This is particularly beneficial for modern JavaScript applications that utilize ES6 modules and want to reduce the overall bundle size.

The configuration in Rollup is typically simpler compared to other bundlers, making it a preferred choice for projects that prioritize a streamlined setup. It supports various output formats, including CommonJS, ES modules, and UMD (Universal Module Definition), making it versatile for different project requirements.

Key features of Rollup include support for dynamic imports, code splitting, and the ability to generate source maps for better debugging.

<br/>

Rollup features:

- **Tree-Shaking**: Eliminates unused code during bundling, resulting in smaller and more optimized bundles.
- **Simplified Configuration**: Offers a straightforward configuration setup for ease of use.
- **Versatile Output Formats**: Supports multiple output formats, including CommonJS, ES modules, and UMD.
- **Dynamic Imports**: Enables dynamic loading of modules for efficient code splitting.
- **Source Maps**: Generates source maps for improved debugging capabilities.

<br/>

## Example

Rollup configuration file (`rollup.config.js`):

```javascript
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'MyLibrary',
  },
  plugins: [resolve(), commonjs()],
};
```


> Rollup is an open-source JavaScript module bundler that specializes in creating smaller and more efficient bundles. It excels in projects that prioritize tree-shaking and code splitting, offering a streamlined configuration and support for various output formats.
