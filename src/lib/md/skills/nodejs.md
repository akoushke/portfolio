# Node.js

---

[`Node.js`](https://nodejs.org/) is an open-source, cross-platform JavaScript runtime built on Chrome's V8 JavaScript engine. Developed by Ryan Dahl in 2009, Node.js allows developers to run JavaScript code on the server side, enabling the development of scalable and high-performance web applications.

Key features of Node.js include:

- **Event-Driven and Non-Blocking I/O**: Node.js uses an event-driven, non-blocking I/O model, making it efficient and suitable for handling concurrent connections.

- **NPM (Node Package Manager)**: NPM is a package manager for Node.js that facilitates the installation, sharing, and management of third-party libraries and tools.

- **Single-threaded Event Loop**: Node.js employs a single-threaded event loop that efficiently handles asynchronous operations, allowing for better scalability.

- **Cross-Platform**: Node.js is designed to run on various operating systems, including Windows, macOS, and Linux, providing flexibility for developers.

- **V8 JavaScript Engine**: Node.js leverages the V8 JavaScript engine from Google Chrome, optimizing the execution speed of JavaScript code.

- **Large Ecosystem**: Node.js has a large and vibrant ecosystem of modules and packages, empowering developers to easily extend functionality and share reusable code.

- **Server-Side JavaScript**: Allows developers to use JavaScript for both client-side and server-side development, fostering code reusability.

<br/>

## Example

A simple HTTP server using Node.js:

```javascript
// Include the 'http' module
const http = require('http');

// Create an HTTP server that responds with "Hello, World!" for all requests
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Listen on port 3000 and IP address 127.0.0.1
const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});
```

> Node.js revolutionizes server-side development by enabling JavaScript execution outside the browser. Its event-driven architecture and non-blocking I/O make it well-suited for building scalable and efficient web applications.
