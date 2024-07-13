# Sass

---

[Sass](https://sass-lang.com/) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It introduces features not available in traditional CSS, such as variables, nesting, and mixins, making stylesheets more maintainable and flexible.

Sass syntax includes both the original "Sass" syntax, known as the indented syntax, and the more widely used "SCSS" (Sassy CSS) syntax, which closely resembles CSS with braces and semicolons.

One of Sass's key advantages is the ability to use variables to store values, making it easier to manage and update styles across a project. Nesting allows for a more hierarchical and structured approach to styling, while mixins enable the reuse of style patterns.

Sass supports importing and modularization, allowing styles to be organized into separate files and then combined into a single stylesheet during compilation. This improves code organization and maintainability in larger projects.

<br/>

Sass features:

- **Variables**: Store and reuse values across stylesheets for easy maintenance.
- **Nesting**: Create a more hierarchical and organized structure in styles.
- **Mixins**: Reuse and include style patterns in different parts of the stylesheet.
- **Importing and Modularization**: Organize styles into separate files for improved maintainability.
- **Extends**: Share styles between selectors, reducing redundancy in the codebase.

<br/>

## Example

Sass SCSS syntax:

```css
$primary-color: #3498db;

body {
  font-family: 'Arial', sans-serif;
  background-color: $primary-color;

  h1 {
    color: white;
  }

  .container {
    width: 80%;
    margin: 0 auto;
  }
}
```

> Sass is a powerful preprocessor scripting language for CSS, introducing features like variables, nesting, and mixins. With its ability to improve code organization, maintainability, and reduce redundancy, Sass enhances the styling process, making stylesheets more flexible and easier to manage.
