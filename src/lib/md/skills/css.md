# CSS

---

[`CSS`](https://developer.mozilla.org/en-US/docs/Web/CSS) (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML. CSS defines how elements should be displayed, styled, and formatted on a web page, ensuring a consistent and visually appealing user interface.

CSS features:

- **Selectors and Declarations**: Selectors target HTML elements, and declarations define the styling rules for those elements.

- **Box Model**: Describes the layout of elements in terms of content, padding, border, and margin.

- **Flexbox and Grid Layout**: Introduces layout models like Flexbox and Grid for more sophisticated and responsive designs.

- **Transitions and Animations**: Allows the creation of smooth transitions and animations to enhance user experience.

- **Responsive Design**: Supports media queries and responsive units to adapt layouts for different screen sizes and devices.

- **Color and Typography**: Defines colors, fonts, and text properties to control the visual appearance of text and other elements.

- **Transformations**: Enables 2D and 3D transformations, such as scaling, rotating, and skewing elements.

<br/>

## Example

```css
/* Example of a simple CSS stylesheet */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
}

header {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 20px;
}

section {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}
```

> CSS enhances the visual presentation of HTML documents, allowing developers to control fonts, colors, layouts, and more. It plays a crucial role in creating aesthetically pleasing and responsive web pages.
