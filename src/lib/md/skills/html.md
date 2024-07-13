# HTML

---

[`HTML`](https://developer.mozilla.org/en-US/docs/Web/HTML) (HyperText Markup Language) is the standard markup language for creating and structuring web pages. It provides a set of elements or tags that define the structure and content of a web document. HTML is an essential technology for web development, working in conjunction with CSS (Cascading Style Sheets) and JavaScript to create interactive and visually appealing websites.

HTML features:

- **Document Structure**: Defines the basic structure of a web document, consisting of elements like `<html>`, `<head>`, and `<body>`.

- **Semantic Elements**: Includes semantic elements like `<header>`, `<nav>`, `<article>`, and `<footer>` for improved document structure and meaning.

- **Multimedia Integration**: Supports the inclusion of multimedia elements such as images (`<img>`), audio (`<audio>`), and video (`<video>`).

- **Form Elements**: Provides form-related elements like `<form>`, `<input>`, `<textarea>`, and `<button>` for user input and interaction.

- **Hyperlinks**: Uses `<a>` (anchor) elements for creating hyperlinks, allowing navigation between different web pages.

- **Lists and Tables**: Supports the creation of lists (`<ul>`, `<ol>`, `<li>`) and tables (`<table>`, `<tr>`, `<td>`) for organizing content.

- **Metadata**: Incorporates metadata elements such as `<title>`, `<meta>`, and `<link>` for specifying document information, character set, and stylesheets.

<br/>

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample HTML Page</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <section>
    <article>
      <h2>Article Title</h2>
      <p>This is a sample article.</p>
    </article>

    <article>
      <h2>Another Article</h2>
      <p>More content here.</p>
    </article>
  </section>

  <footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>
</body>
</html>
```

> HTML is the foundational markup language for structuring web pages. It defines the document structure, incorporates semantic elements, and allows integration of multimedia and interactive elements. The example above showcases a simple HTML document with headers, navigation, articles, and a footer.