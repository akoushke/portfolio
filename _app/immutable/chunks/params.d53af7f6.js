import{w as he,b as J}from"./paths.c9ccc0a1.js";const de="@riadh-adrani-theme",fe=e=>{localStorage.setItem(de,JSON.stringify(e))},ue=he(!1),oe=e=>ue.update(f=>{var m;const y=typeof e=="boolean"?e:!f;return fe(y),(m=document.querySelector(":root"))==null||m.setAttribute("data-theme",y?"dark":"light"),y}),Ge=()=>{const e=localStorage.getItem(de);e?oe(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?oe(!0):oe(!1)},se=e=>`${J}/logos/${e}`,t=(e,f)=>f?{dark:se(f),light:se(e)}:se(e),v={AWS:t("aws.svg"),Bootstrap:t("bootstrap.svg"),C:t("c.svg"),CalPoly:t("calpoly.png"),CircleCI:t("circleci.svg"),Cpp:t("cpp.svg"),Cisco:t("cisco.png"),Celery:t("celery.svg"),Django:t("django.svg"),FastApi:t("fastapi"),Flask:t("flask.svg"),Go:t("go.svg"),Kafka:t("kafka.svg"),Neo4j:t("neo4j.svg"),Nginx:t("nginx.svg"),Numpy:t("numpy.svg"),Pandas:t("pandas.svg"),RabbitMQ:t("rabbitmq.svg"),Rust:t("rust.svg","rust-dark.png"),Redux:t("redux.svg"),Scrapy:t("scrapy.png"),Selenium:t("selenium.svg"),Docker:t("docker.svg"),Kubernetes:t("kubernetes.png"),Csharp:t("csharp.svg"),Xamarin:t("xamarin.svg"),TypeScript:t("ts.png"),VueJs:t("vue.png"),ReactJs:t("react.svg"),Dart:t("dart.png"),Kotlin:t("kotlin.png"),Python:t("python.png"),NodeJs:t("node.png"),Deno:t("deno.png","deno-dark.png"),Svelte:t("svelte.png"),ExpressJs:t("express.png"),JavaScript:t("js.png"),Fastify:t("fastify.svg","fastify-dark.png"),NestJs:t("nest.svg"),Quasar:t("quasar.svg"),SolidJs:t("solid.svg"),Electron:t("electron.png"),Flutter:t("flutter.svg"),Java:t("java.png"),AdonisJs:t("adonis.png"),Android:t("android.png"),Angular:t("angular.png"),PostgreSQL:t("postgres.png"),Firebase:t("firebase.png"),Sass:t("sass.png"),Unknown:t("no-img.svg"),MongoDB:t("mongodb.svg"),Redis:t("redis.svg"),Tailwind:t("tailwind.svg"),HTML:t("html.svg"),Premiere:t("premiere.svg"),Photoshop:t("photoshop.svg"),CSS:t("css.svg"),AfterEffects:t("after-effects.svg"),Illustrator:t("illustrator.svg"),Nuxt:t("nuxt.png"),Vite:t("vite.png"),Vitest:t("vitest.svg"),Jest:t("jest.png"),Unocss:t("unocss.svg"),Ruvy:t("ruvy.svg"),Rollup:t("rollup.svg"),Postcss:t("postcss.svg"),Webpack:t("webpack.png"),Webex:t("webex.png"),Office:t("office.svg"),WebexDev:t("webex-dev.svg")};let pe;ue.subscribe(e=>pe=e);const qe=e=>typeof e=="string"?e:pe?e.dark:e.light,be=[{degree:"Bachelor Degree of Computer Science",description:"",location:"San Luis Obispo, CA",logo:v.CalPoly,name:"",organization:"California Public University",period:{from:new Date(2012,9,1),to:new Date(2016,12,15)},shortDescription:"Learn by Doing",slug:"dummy-education-item",subjects:["Node.js","Algorithm","System Programming","Operating Systems","C++","Java","English"]}],ve=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`typescript
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,ye=`# ReactJS

---

[\`ReactJS\`](https://reactjs.org/) is a free and open-source front-end JavaScript library for building user interfaces. Developed and maintained by Facebook and a community of individual developers and companies, ReactJS is widely used for creating interactive and dynamic web applications. Unlike traditional templating engines, ReactJS introduces a component-based architecture, enabling the creation of reusable UI components that manage their own state.

ReactJS leverages a virtual DOM (Document Object Model) to efficiently update and render components, providing a smoother user experience. With its declarative syntax, developers can describe the desired UI, and React takes care of updating and rendering the components as the application state changes.

The library promotes the concept of "learn once, write anywhere," allowing developers to use ReactJS in various environments, such as web, mobile, and virtual reality applications.

<br/>

ReactJS features:

- **Declarative**: Describe the UI and React will efficiently update and render components as needed.
- **Component-Based**: Encourages the creation of modular and reusable UI components for a scalable application architecture.
- **Virtual DOM**: Optimizes performance by updating only the necessary parts of the DOM.
- **One-Way Data Binding**: Ensures a unidirectional flow of data, simplifying the state management process.

<br/>

## Example

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>{count} * 2 = {count * 2}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> ReactJS is a powerful front-end JavaScript library developed by Facebook for building user interfaces in a modular and efficient manner.
`,we=`# Redux

---

[Redux](https://redux.js.org/) is an open-source JavaScript library for managing the state of a web application in a predictable and centralized manner. It is commonly used with React but can be integrated with other JavaScript frameworks or libraries. Redux provides a unidirectional data flow architecture, allowing developers to maintain and update application state in a consistent way.

Key concepts and features of Redux include:

- **Store**: The store in Redux represents the single source of truth for the application state. It holds the complete state tree and allows access and updates through a set of defined methods.

- **Actions**: Actions are plain JavaScript objects that describe an intention to change the state. They are dispatched to the Redux store and trigger the corresponding state modifications.

- **Reducers**: Reducers are functions that specify how the application state changes in response to actions. Each reducer takes the current state and an action as arguments and returns the new state.

- **Immutable State**: Redux encourages the use of immutable state. Instead of modifying the existing state directly, reducers create new state objects, ensuring a clear and traceable state history.

- **Flux Architecture**: Redux is inspired by the Flux architecture, emphasizing a unidirectional data flow. Actions flow from the application to the store, and state changes flow back from the store to the application.

- **Middleware**: Middleware in Redux allows developers to extend the store's capabilities. It can be used for logging, asynchronous operations, and other custom behaviors.

- **Selectors**: Selectors are functions that extract specific pieces of information from the application state. They provide a clean way to access and derive data from the state.

- **DevTools Extension**: Redux offers a browser extension called Redux DevTools that provides a powerful set of tools for debugging and inspecting the state changes in real-time.

- **Community and Ecosystem**: Redux has a large and active community, and it is often used in conjunction with React. Various middleware, tools, and integrations have been developed to enhance the Redux ecosystem.

Redux is particularly beneficial for managing complex state in large-scale applications. It promotes a clear separation of concerns and a predictable state management pattern, making it easier to reason about the application's behavior.

> Redux is a JavaScript library for managing the state of web applications. With its unidirectional data flow, clear separation of concerns, and immutability principles, Redux provides a predictable and scalable solution for state management, often used in conjunction with React.`,Se=`# Angular

---

[\`Angular\`](https://angular.io/) is a comprehensive and open-source front-end web application framework developed and maintained by Google and a community of developers. Known for its robustness and scalability, Angular enables the creation of dynamic, single-page web applications with a modular and component-based architecture.

Angular uses TypeScript as its primary language, providing strong typing and advanced features for building scalable applications. It incorporates a two-way data binding mechanism, facilitating seamless communication between components and ensuring real-time updates.

The framework includes an extensive set of tools, libraries, and modules that simplify common development tasks, such as routing, form handling, and HTTP client interactions. Angular's CLI (Command Line Interface) enhances the development process by automating various tasks, making it easier for developers to build and deploy applications.

<br/>

Angular features:

- **Modular Architecture**: Encourages the development of modular and reusable components for building scalable applications.
- **TypeScript Integration**: Utilizes TypeScript for strong typing and improved developer productivity.
- **Two-Way Data Binding**: Facilitates real-time communication between components, enhancing user interface interactivity.
- **Dependency Injection**: Enables the creation of loosely coupled components, enhancing maintainability and testability.

<br/>

## Example

\`\`\`typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <p>{{ count }} * 2 = {{ count * 2 }}</p>
      <button (click)="increment()">Count</button>
    </div>
  \`,
})
export class CounterComponent {
  count = 1;

  increment(): void {
    this.count += 1;
  }
}
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Angular is a powerful front-end web application framework developed by Google, offering a modular and component-based architecture for building scalable and dynamic single-page applications.
`,ke=`# Electron

---

[\`Electron\`](https://www.electronjs.org/) is an open-source framework that allows developers to build cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. Created by GitHub, Electron enables the development of desktop applications with a single codebase that can run on Windows, macOS, and Linux.

Key features of Electron include:

- **Web Technologies**: Utilizes familiar web technologies, enabling developers to leverage their skills in building desktop applications.

- **Chromium Engine**: Employs the Chromium rendering engine for rendering web pages, providing a reliable and consistent platform across different operating systems.

- **Node.js Integration**: Integrates Node.js, allowing developers to use server-side JavaScript in desktop applications and access system-level functionalities.

- **Native APIs**: Provides access to native APIs, enabling desktop applications to interact with the file system, clipboard, system notifications, and more.

- **Cross-Platform**: Allows the development of cross-platform applications with a single codebase, reducing the need for platform-specific code.

- **Extensibility**: Supports the use of third-party modules and packages, allowing developers to extend functionality and integrate additional features.

- **Wide Adoption**: Electron is widely adopted and used by various companies and projects, making it a popular choice for building desktop applications.

<br/>

## Example

A simple Electron application:

\`\`\`javascript
const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the index.html file
  mainWindow.loadFile('index.html');

  // Open the DevTools
  mainWindow.webContents.openDevTools();
}

// Create window when the app is ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Create a new window when the app is activated (on macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
\`\`\`

> Electron empowers developers to create cross-platform desktop applications using web technologies. With its integration of Node.js and access to native APIs, Electron facilitates the development of feature-rich and scalable desktop applications.
`,xe=`# Node.js

---

[\`Node.js\`](https://nodejs.org/) is an open-source, cross-platform JavaScript runtime built on Chrome's V8 JavaScript engine. Developed by Ryan Dahl in 2009, Node.js allows developers to run JavaScript code on the server side, enabling the development of scalable and high-performance web applications.

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

\`\`\`javascript
// Include the 'http' module
const http = require('http');

// Create an HTTP server that responds with "Hello, World!" for all requests
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\\n');
});

// Listen on port 3000 and IP address 127.0.0.1
const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip, () => {
  console.log(\`Server running at http://\${ip}:\${port}/\`);
});
\`\`\`

> Node.js revolutionizes server-side development by enabling JavaScript execution outside the browser. Its event-driven architecture and non-blocking I/O make it well-suited for building scalable and efficient web applications.
`,Ce=`# Webpack

---

[\`Webpack\`](https://webpack.js.org/) is a widely-used open-source JavaScript module bundler. It plays a crucial role in modern web development by managing and bundling various assets, such as JavaScript, CSS, and images, into optimized bundles for deployment. Webpack simplifies the development workflow, enhances performance, and aids in code organization.

As a module bundler, Webpack allows developers to structure their code into modules and dependencies. It intelligently analyzes these dependencies and creates a dependency graph, facilitating efficient bundling and optimization. Additionally, Webpack supports the use of loaders and plugins to process and transform different types of files during the bundling process.

Key features of Webpack include hot module replacement for real-time code updates, code splitting for optimizing load times, and a vibrant ecosystem of plugins and loaders that extend its functionality.

<br/>

Webpack features:

- **Module Bundling**: Efficiently bundles and manages modules, enhancing code organization.
- **Loaders**: Processes and transforms different types of files, such as JavaScript, CSS, and images, during the bundling process.
- **Code Splitting**: Optimizes load times by splitting code into smaller, more manageable chunks.
- **Hot Module Replacement**: Allows for real-time updates in the browser without a full page refresh.
- **Vibrant Ecosystem**: Extensive collection of plugins and loaders for customizing and extending Webpack's functionality.

<br/>

## Example

Webpack configuration file (\`webpack.config.js\`):

\`\`\`javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
\`\`\`

> Webpack is a powerful open-source JavaScript module bundler widely used in modern web development. It simplifies code organization, enhances performance, and optimizes the deployment workflow by bundling various assets into optimized packages.
`,De=`# Rollup

---

[\`Rollup\`](https://rollupjs.org/) is an open-source JavaScript module bundler that focuses on creating smaller, more efficient bundles. It is commonly used for building libraries and applications where code splitting and tree-shaking are essential for optimizing the final output.

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

Rollup configuration file (\`rollup.config.js\`):

\`\`\`javascript
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
\`\`\`


> Rollup is an open-source JavaScript module bundler that specializes in creating smaller and more efficient bundles. It excels in projects that prioritize tree-shaking and code splitting, offering a streamlined configuration and support for various output formats.
`,Me=`# Kubernetes

---

[\`Kubernetes\`](https://kubernetes.io/) is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications. Originally developed by Google, Kubernetes has gained widespread adoption and is maintained by the Cloud Native Computing Foundation (CNCF). It provides a robust and extensible platform for managing containerized workloads and services.

Key features of Kubernetes include:

- **Container Orchestration**: Manages the deployment and scaling of containerized applications, ensuring efficient utilization of resources.

- **Automated Scaling**: Allows automatic scaling of applications based on demand, ensuring optimal performance and resource allocation.

- **Service Discovery and Load Balancing**: Facilitates the discovery of services and distributes incoming traffic across containers, ensuring high availability.

- **Self-healing Capabilities**: Monitors the health of applications and automatically restarts or replaces failed containers to maintain system reliability.

- **Declarative Configuration**: Uses YAML or JSON configuration files to declare the desired state of applications and infrastructure.

- **Rolling Updates and Rollbacks**: Supports seamless updates and rollbacks of applications with minimal downtime, improving deployment flexibility.

- **Multi-Cloud and Hybrid Cloud Support**: Works across various cloud providers and on-premises environments, providing flexibility in deployment.

- **Extensibility**: Offers a rich ecosystem of extensions and plugins, allowing developers to customize and extend Kubernetes functionality.

<br/>

## Example

A simple Kubernetes Deployment:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
\`\`\`

This YAML configuration describes a deployment named \`nginx-deployment\` that ensures three replicas of the NGINX container are running. It also defines the container's image, ports, and labels.

> Kubernetes simplifies the deployment and management of containerized applications, providing features for scaling, self-healing, and automation. Its declarative configuration allows developers to define the desired state, while the platform takes care of ensuring that state is maintained.
`,Ae=`# Docker

---

[Docker](https://www.docker.com/) is an open-source platform that automates the deployment, scaling, and management of applications inside lightweight, portable containers. Developed by Docker, Inc., Docker containers encapsulate applications and their dependencies, ensuring consistency across various environments and simplifying the deployment process.

Key concepts and features of Docker include:

- **Containerization**: Docker uses containerization to package an application and its dependencies into a single, portable container. Containers are isolated and share the underlying OS kernel, making them lightweight and efficient.

- **Docker Engine**: The Docker Engine is the core component responsible for creating and running containers. It includes a server, REST API, and command-line interface for interacting with Docker.

- **Docker Hub**: Docker Hub is a cloud-based registry service where users can store and share Docker images. It serves as a centralized repository for Docker images, allowing easy distribution and collaboration.

- **Docker Image**: A Docker image is a lightweight, standalone, and executable package that includes everything needed to run an application, including the code, runtime, libraries, and system tools.

- **Dockerfile**: A Dockerfile is a script used to create a Docker image. It specifies the base image, application code, dependencies, and configurations needed to build the container.

- **Container Orchestration**: Docker provides tools for orchestrating and managing containers at scale. Docker Compose allows defining and running multi-container applications, and Docker Swarm provides native clustering and orchestration capabilities.

- **Cross-Platform Compatibility**: Docker containers can run consistently across different environments, such as development machines, testing servers, and production systems, eliminating the "it works on my machine" problem.

- **Microservices Architecture**: Docker facilitates the adoption of microservices architecture by encapsulating each microservice in a separate container. This enhances scalability, maintainability, and flexibility.

- **Versioning and Rollback**: Docker allows versioning of images, enabling easy rollbacks to previous versions. This ensures reproducibility and consistency in application deployments.

- **Community and Ecosystem**: Docker has a vibrant and active community, contributing to a rich ecosystem of tools and integrations. It is widely adopted in the software development and DevOps communities.

Docker has revolutionized application deployment by providing a standardized and efficient way to package, distribute, and run applications, making it a fundamental technology in modern software development.

> Docker is a powerful platform for containerization, enabling the efficient packaging and deployment of applications. With its lightweight containers, versioning capabilities, and vibrant ecosystem, Docker has become a cornerstone in modern software development and DevOps practices.
`,$e=`# Amazon Web Services (AWS)

---

[Amazon Web Services (AWS)](https://aws.amazon.com/) is a comprehensive and widely adopted cloud computing platform provided by Amazon. Launched in 2006, AWS offers a vast array of cloud services, including computing power, storage, databases, machine learning, analytics, security, and more. AWS enables businesses and individuals to leverage the power of the cloud to build and scale applications, store and analyze data, and deploy various services with high reliability and flexibility.

Key features and services of AWS include:

- **Compute Services**: Offers scalable and flexible compute resources through services like Amazon EC2 (Elastic Compute Cloud) and AWS Lambda for serverless computing.

- **Storage Services**: Provides various storage solutions, including Amazon S3 (Simple Storage Service) for object storage, Amazon EBS (Elastic Block Store) for block storage, and Amazon Glacier for long-term archival.

- **Database Services**: Offers managed database services like Amazon RDS (Relational Database Service), Amazon DynamoDB for NoSQL databases, and Amazon Redshift for data warehousing.

- **Machine Learning and AI**: AWS provides services for machine learning and artificial intelligence, such as Amazon SageMaker, Amazon Comprehend, and Amazon Rekognition.

- **Networking**: Includes services like Amazon VPC (Virtual Private Cloud), AWS Direct Connect for dedicated network connections, and Amazon Route 53 for domain registration and DNS.

- **Security and Identity**: AWS prioritizes security with services like AWS Identity and Access Management (IAM), AWS Key Management Service (KMS), and AWS WAF (Web Application Firewall).

- **Developer Tools**: Offers a range of tools for development and deployment, such as AWS CodeBuild, AWS CodeDeploy, and AWS CodePipeline.

- **Analytics and Big Data**: Provides services for analytics and big data processing, including Amazon EMR (Elastic MapReduce) and Amazon Athena.

- **Internet of Things (IoT)**: AWS IoT services enable the connection and management of IoT devices at scale.

- **Serverless Computing**: AWS Lambda allows developers to run code without provisioning or managing servers, enabling serverless computing.

- **Global Reach**: AWS has a global infrastructure with data centers in multiple regions, allowing users to deploy applications globally with low-latency access.

- **Elasticity and Scalability**: Users can scale resources up or down based on demand, ensuring cost efficiency and high availability.

AWS is widely used across industries, from startups to enterprises, and provides a reliable and scalable foundation for cloud-based computing and services.

> Amazon Web Services (AWS) is a leading cloud computing platform offering a wide range of services for computing, storage, databases, machine learning, and more. With a global infrastructure, strong security features, and scalability, AWS is a popular choice for businesses seeking reliable and flexible cloud solutions.`,We=`# Sass

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

\`\`\`css
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
\`\`\`

> Sass is a powerful preprocessor scripting language for CSS, introducing features like variables, nesting, and mixins. With its ability to improve code organization, maintainability, and reduce redundancy, Sass enhances the styling process, making stylesheets more flexible and easier to manage.
`,ze=`# CSS

---

[\`CSS\`](https://developer.mozilla.org/en-US/docs/Web/CSS) (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML. CSS defines how elements should be displayed, styled, and formatted on a web page, ensuring a consistent and visually appealing user interface.

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

\`\`\`css
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
\`\`\`

> CSS enhances the visual presentation of HTML documents, allowing developers to control fonts, colors, layouts, and more. It plays a crucial role in creating aesthetically pleasing and responsive web pages.
`,Te=`# HTML

---

[\`HTML\`](https://developer.mozilla.org/en-US/docs/Web/HTML) (HyperText Markup Language) is the standard markup language for creating and structuring web pages. It provides a set of elements or tags that define the structure and content of a web document. HTML is an essential technology for web development, working in conjunction with CSS (Cascading Style Sheets) and JavaScript to create interactive and visually appealing websites.

HTML features:

- **Document Structure**: Defines the basic structure of a web document, consisting of elements like \`<html>\`, \`<head>\`, and \`<body>\`.

- **Semantic Elements**: Includes semantic elements like \`<header>\`, \`<nav>\`, \`<article>\`, and \`<footer>\` for improved document structure and meaning.

- **Multimedia Integration**: Supports the inclusion of multimedia elements such as images (\`<img>\`), audio (\`<audio>\`), and video (\`<video>\`).

- **Form Elements**: Provides form-related elements like \`<form>\`, \`<input>\`, \`<textarea>\`, and \`<button>\` for user input and interaction.

- **Hyperlinks**: Uses \`<a>\` (anchor) elements for creating hyperlinks, allowing navigation between different web pages.

- **Lists and Tables**: Supports the creation of lists (\`<ul>\`, \`<ol>\`, \`<li>\`) and tables (\`<table>\`, \`<tr>\`, \`<td>\`) for organizing content.

- **Metadata**: Incorporates metadata elements such as \`<title>\`, \`<meta>\`, and \`<link>\` for specifying document information, character set, and stylesheets.

<br/>

## Example

\`\`\`html
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
\`\`\`

> HTML is the foundational markup language for structuring web pages. It defines the document structure, incorporates semantic elements, and allows integration of multimedia and interactive elements. The example above showcases a simple HTML document with headers, navigation, articles, and a footer.`,je=`# JavaScript

---

[\`JavaScript\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a versatile and widely-used programming language primarily known for its role in front-end web development. As a dynamic and interpreted language, JavaScript is executed on the client side, providing interactivity and enhancing the user experience.

JavaScript features:

- **Dynamic Typing**: Variables are not explicitly typed, allowing flexibility in assigning different types of values.

- **Prototype-based Inheritance**: Objects can inherit properties and methods directly from other objects.

- **Event-Driven Programming**: Utilizes an event-driven programming model, responding to user actions and interactions.

- **Asynchronous Programming**: Supports asynchronous operations through features like Promises and async/await.

- **Client-Side Scripting**: Mainly used for scripting in web browsers to create dynamic and interactive web pages.

- **Extensive Ecosystem**: Supported by a vast ecosystem of libraries and frameworks, such as Node.js for server-side development.

- **Highly Accessible**: Widely supported in web browsers, making it accessible to developers for client-side scripting.

<br/>

## Example

\`\`\`javascript
// Example of a simple JavaScript function
function greet(name) {
  return \`Hello, \${name}!\`;
}

const personName = 'John Doe';
console.log(greet(personName));
\`\`\`

> JavaScript is a versatile programming language widely employed for client-side scripting in web development. Known for its dynamic typing and event-driven nature, JavaScript enhances the interactivity and responsiveness of web pages. It is a fundamental technology in the development of modern web applications.
`,Ie=`# TypeScript

---

[\`TypeScript\`](https://www.typescriptlang.org/) is an open-source programming language developed by Microsoft. Positioned as a superset of JavaScript, TypeScript introduces static typing to enhance the development process by catching errors at compile time and providing a richer tooling experience.

Key features of TypeScript include:

- **Static Typing**: Allows developers to define types for variables, function parameters, and return values, providing early error detection and improving code robustness.

- **ES6+ Features**: Inherits and extends the features of ECMAScript (ES6 and beyond), enabling the use of modern JavaScript syntax and features.

- **Interfaces and Classes**: Supports the creation of interfaces and classes to define clear contracts and encapsulate functionality.

- **Generics**: Enables the creation of flexible and reusable components by using generics to parameterize types.

- **Compilation to JavaScript**: TypeScript code is transpiled to standard JavaScript, ensuring compatibility with all JavaScript environments.

- **Tooling Support**: Benefits from excellent tooling, including code editors like Visual Studio Code, which provides intelligent code completion, navigation, and refactoring.

- **Declaration Files**: Allows the use of declaration files (\`.d.ts\`) to describe the shape of external libraries and JavaScript code.

- **Popular in Frontend Development**: Widely adopted in frontend development, especially in Angular projects, where it serves as the primary language.

<br/>

## Example

\`\`\`typescript
interface Person {
  firstName: string;
  lastName: string;
}

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet(person: Person): string {
    return \`Hello, \${person.firstName} \${person.lastName}! \${this.greeting}\`;
  }
}

const greeter = new Greeter('Welcome');

const user: Person = { firstName: 'John', lastName: 'Doe' };

console.log(greeter.greet(user));
\`\`\`

> TypeScript enhances JavaScript development by introducing static typing, interfaces, classes, and other features. It provides early error detection, improves code maintainability, and is widely embraced in both frontend and backend development.
`,Ee=`# Circle CI

---

[\`Circle CI\`](https://circleci.com/) is a robust continuous integration and delivery (CI/CD) platform designed to streamline and automate the software development lifecycle. It plays a crucial role in ensuring code quality, enabling efficient testing, and facilitating the seamless deployment of applications.

Circle CI operates by automating the integration, testing, and deployment processes whenever changes are made to a project's codebase. It supports a wide range of programming languages and provides customizable workflows to accommodate diverse project requirements.

The platform offers features such as parallelization, caching, and environment customization, allowing developers to optimize build times and enhance overall development efficiency. With its intuitive web interface and extensive documentation, Circle CI is accessible and user-friendly for both small and large development teams.

<br/>

Circle CI features:

- **Continuous Integration and Deployment**: Automates integration, testing, and deployment processes to maintain code quality and streamline development workflows.
- **Language and Environment Support**: Accommodates a variety of programming languages and allows customization of build environments.
- **Parallelization and Caching**: Optimizes build times by enabling parallel execution and caching of dependencies.
- **Web Interface and Documentation**: Provides an intuitive web interface for configuration and detailed documentation for easy adoption.

<br/>

## Example

Circle CI configuration file (\`.circleci/config.yml\`):

\`\`\`yaml
version: 2.1

jobs:
  build:
    docker:
      - image: 'circleci/node:14'

    steps:
      - checkout
      - run: npm install
      - run: npm test

workflows:
  version: 2
  build:
    jobs:
      - build
\`\`\`

> Circle CI is a powerful continuous integration and delivery platform that automates key aspects of the software development lifecycle. With support for various languages, customization options, and optimization features, it ensures efficient testing and deployment, contributing to a streamlined development process.
`,Le=`# Overview

This proof-of-concept custom-branded application allows users to dial into a video call queue powered by Webex Call Management Group, establishing a structured connection between the requester and the agent. This web application provides a support queue system for integration into E2C use cases. It allows demo builders to create a custom-branded experience, enabling users to dial into up to 4 queues, each tailored to offer a unique experience while awaiting connection to an agent.

<br />
<br />

## My Contributions

Over the past couple of years, I have assumed a leadership role, spearheading the architecture, implementation, deployment, and continuous maintenance of this application. Demonstrating a deep technical proficiency, I crafted the application using Svelte and TypeScript in SSR mode. To ensure a responsive design, I integrated standard Bulma styling modules alongside MDI library icons. Notably, I enhanced the application with advanced functionality, such as auto-populating macros, facilitating seamless launches on Cisco Cloud registered devices in kiosk mode.
`,Oe=`# Overview

The Webex Developer Portal is a comprehensive platform designed to actively involve and assist developers in integrating seamlessly with the Webex ecosystem. Developed with TypeScript and React.js in SSR (Server-Side Rendering), the portal provides essential features to facilitate a smooth integration process. This application consists of the followings:

<br />

- **API Playground:** Developers can explore and test Webex APIs in a controlled environment, ensuring a better understanding of their functionalities. The portal includes comprehensive documentation, providing clear and detailed information on each API endpoint, request parameters, and response structures. This ensures developers have the resources they need to integrate Webex functionalities seamlessly into their applications.
- **Card Designers:** The portal offers tools for designing and customizing cards, enabling developers to create visually appealing and functional components for their applications.
- **Extensive Documentation:** The Webex Developer Portal provides extensive documentation for developers, offering detailed guides, tutorials, and reference materials. This documentation covers a wide range of topics, including API usage, card customization, and best practices for integrating Webex features. This wealth of information empowers developers with the knowledge and guidance necessary to navigate the platform effectively and build successful integrations.

<br />
<br />

## My Contributions

Throughout my involvement, I played a pivotal role in shaping numerous key features within this webpage. This includes enhancing content management by leveraging a third-party CSM (Content Management System) and implementing middleware in our SSR application to validate and optimize retrieved backend data. Additionally, I had the privilege of introducing significant React components, contributing to the development of highly visible pages for creating and managing integrations, bots, and services.

Moreover, I elevated the error handling view, offering users a more user-friendly experience with detailed error messages for quicker issue resolution, aiming to reduce support tickets and enhance productivity. In terms of development efficiency, I fine-tuned the webpack configuration to minimize repetitive tasks, expediting the development process.

Lastly, I had the privilege of enhancing the metrics and logs, making them more readable and insightful through the integration of PowerBI, ultimately contributing to a more robust and efficient development and monitoring workflow.
`,Re=`# Overview

Webex's web.webex.com is a centralized hub for seamless collaboration, providing easy access to meeting scheduling, video calls, and content sharing. The user-friendly interface simplifies navigation, serving as a command center for managing personal meeting rooms, accessing recordings, and engaging in chat conversations. Overall, it is the go-to platform for streamlined collaboration and connectivity.

<br />
<br />

## My Contributions

I played a crucial role in our team, implementing key UI features within the messaging platform and introducing significant enhancements to the browser SDK, greatly impacting the application. This experience deepened my understanding of backend structures, data modeling, RESTful APIs, and web socket connection logistics. Additionally, I championed and advocated for initiating the end-to-end testing automation process, addressing a significant gap in the application. Towards the end of my engagement, a significant portion of my efforts was dedicated to working on the WebRTC solution and seamlessly integrating the meeting experience into the web client, enabling browser-supported meeting capabilities on the Webex browser client.
`,He=`# Overview

The Webex Browser SDK enables developers to seamlessly integrate Webex collaboration features directly into web applications, providing a customized and enhanced collaboration experience. With comprehensive APIs and tools, this SDK allows for the embedding of Webex meetings and messaging functionalities within web-based solutions, extending the reach of Webex services into the web environment.

<br />
<br />

## My Contributions

I had the privilege of implementing significant features within the browser SDK, such as real-time transcription during meetings. This involved leveraging one of Webex's internal microservices, establishing an LLM connection, and validating the data through appropriate modeling. Another contribution includes enabling real-time presence status, utilizing an internal microservice that required enhancements for integration into the Webex SDK component. I took the initiative to adjust both the microservice and implement the module on the SDK side for external accessibility. Additionally, I took the lead in designing the blur background feature using WebAssembly on the browser side. Whenever a web client required a feature not available on the SDK side, I willingly volunteered to implement the feature with technical guidance from the senior engineering team.
`,Je=`# Overview

The Webex Office 365 Add-in seamlessly integrates Webex collaboration features into the Microsoft Office 365 suite, providing users with a unified and streamlined experience. This add-in is designed to enhance productivity within the familiar Office 365 environment, allowing users to schedule Webex meetings directly from Outlook, access Webex Teams functionalities within Microsoft Teams, and collaborate effortlessly on documents with Webex Meetings integration into Word, Excel, and PowerPoint. The goal is to create a cohesive workspace where users can seamlessly transition between Office 365 applications and Webex collaboration tools, fostering efficient communication and collaboration within a familiar and widely used productivity suite.

<br />
<br />

## My Contributions

During this project, I collaborated with another senior engineer to construct the add-in from scratch, utilizing React Widgets to seamlessly integrate the messaging experience into the Office 365 add-in. This initiative attracted considerable attention from the engineering department, leading to both of us taking the lead over the project with the aim of transforming it into a marketable product. Successfully published to the Office 365 store, the add-in met the deadline with ease. Several blogs covered this product extensively, including one written by our former SVP.You can check it out at [this link](https://blogs.cisco.com/collaboration/file-storage-and-sharing). This experience also sparked my interest in AWS and Docker, leading me to delve into DevOps work, where I often volunteered for repository setup and deployment automation, making the process both enjoyable and enlightening.
`,Pe=`# Overview

Demonstrated leadership by spearheading the development of numerous integrations with third-party applications, such as ServiceNow, Azure, Cisco Meraki, Salesforce, and SAP, effectively enhancing user experience across a diverse range of over 100 use cases. Seized a significant opportunity to influence key clients at Cisco, leading them to adopt the Webex programmable ecosystem and driving innovation through the successful implementation of custom integrations. Additionally, took charge of designing and implementing innovative UI solutions, showcasing a proactive approach to optimizing the overall user experience
`,Ne=`# Overview

Took charge of the engineering efforts for developer.webex.com, leading the implementation of crucial UI features that significantly boosted daily active users to 90,000-200,000. Also, spearheaded the design of UI improvements for web.webex.com, increasing daily active users to around 27,000. Initiated the creation of a testing environment for developer.webex.com to ensure a smooth user experience.

<br />

Contributed actively to the open-source SDK library, incorporating ready-made Native Webex client features to enhance user interactions. Streamlined automation pipelines for web.webex.com, resulting in faster deployments and increased development efficiency. This hands-on leadership role aimed at simplifying processes and driving positive outcomes in web development and user engagement.
`,Fe=`# Overview

Working collaboratively within the team, I took on the task of implementing Webex widgets into the Office 365 add-in, a project aimed at simplifying user interactions. Our joint effort resulted in the creation of a library containing intuitive Webex components, enhancing overall productivity by 12%. Simultaneously, I spearheaded the development of a robust and scalable container infrastructure, which significantly reduced failure rates by 23%. This experience allowed me to deepen my understanding of seamless API integration and infrastructure optimization.

<br />

In addition, I contributed to the implementation of RESTful APIs in Node.js ES6, providing a smooth connection between clients and the Webex RESTful API. My role underscored the importance of teamwork in achieving successful outcomes, and I continue to thrive in collaborative environments where diverse skills come together to create innovative solutions.
`,C=e=>e,me=[C({slug:"js",color:"yellow",description:je,logo:v.JavaScript,name:"Javascript"}),C({slug:"ts",color:"blue",description:Ie,logo:v.TypeScript,name:"Typescript"}),C({slug:"css",color:"blue",description:ze,logo:v.CSS,name:"CSS"}),C({slug:"electronjs",color:"green",description:ke,logo:v.Electron,name:"Electron Js"}),C({slug:"html",color:"orange",description:Te,logo:v.HTML,name:"HTML"}),C({slug:"sass",color:"pink",description:We,logo:v.Sass,name:"Sass"}),C({slug:"reactjs",color:"cyan",description:ye,logo:v.ReactJs,name:"React Js"}),C({slug:"svelte",color:"orange",description:ve,logo:v.Svelte,name:"Svelte"}),C({slug:"nodejs",color:"green",description:xe,logo:v.NodeJs,name:"Node Js"}),C({slug:"kubernetes",color:"green",description:Me,logo:v.Kubernetes,name:"Kubernetes"}),C({slug:"aws",color:"green",description:$e,logo:v.AWS,name:"AWS"}),C({slug:"docker",color:"blue",description:Ae,logo:v.Docker,name:"Docker"}),C({slug:"webpack",color:"red",description:Ce,logo:v.Webpack,name:"Webpack"}),C({slug:"rollup",color:"red",description:De,logo:v.Rollup,name:"Rollup"}),C({slug:"circleci",color:"red",description:Ee,logo:v.CircleCI,name:"Circle CI"}),C({slug:"angularjs",color:"orange",description:Se,logo:v.Angular,name:"Angular Js"}),C({slug:"reduxjs",color:"white",description:we,logo:v.Redux,name:"Redux Js"})],B=(...e)=>me.filter(f=>e.includes(f.slug));var z=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e))(z||{}),te=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(te||{});const Ye=[{slug:"global-specialist",company:"Cisco Webex",description:Pe,contract:te.FullTime,type:"Software Sales Engineering",location:"Seattle, WA",period:{from:new Date(2022,1,1),to:new Date},skills:B("ts","js","svelte","react","electronjs","nodejs","kubernetes","aws","sass","docker"),name:"Global Technical Specialist",color:"blue",links:[{to:`${J}/projects/video-call`,label:"Video Call Queue Demo Builder"}],logo:v.Webex,shortDescription:"Designed and implemented innovative UI solutions to optimize user experience across 100+ use cases"},{slug:"senior-front-end-developer",company:"Cisco Webex",description:Ne,contract:te.FullTime,type:"Software Development",location:"San Francisco, CA",period:{from:new Date(2018,12,1),to:new Date(2022,1,1)},skills:B("js","reactjs","nodejs","sass","webpack","rollup","circleci"),name:"Senior Front-end Developer",color:"red",links:[{to:`${J}/projects/webex-developer-portal`,label:"Webex Developer Portal"},{to:`${J}/projects/webex-web-browser`,label:"Webex Web Browser Client"},{to:`${J}/projects/webex-browser-sdk`,label:"Webex Browser SDK"}],logo:v.Webex,shortDescription:"Engineered major UI features on Webex's primary platforms and contributed to the browser SDK, showcasing enthusiasm for DevOps practices."},{slug:"front-end-developer",company:"Cisco",description:Fe,contract:te.FullTime,type:"Software Development",location:"San Francisco, CA",period:{from:new Date(2017,1,1),to:new Date(2018,11,1)},skills:B("js","ts","angularjs","reactjs","nodejs","webpack"),name:"Front-end Developer",color:"green",links:[{to:`${J}/projects/webex-developer-portal`,label:"Webex Developer Portal"},{to:`${J}/projects/webex-web-browser`,label:"Webex Web Browser Client"},{to:`${J}/projects/webex-browser-sdk`,label:"Webex Browser SDK"}],logo:v.Cisco,shortDescription:"Designed and deployed a library of reusable Angular UI components following Cisco Style Standards. Additionally, implemented and released a Webex Office365 add-in, leveraging Webex React widgets."}],Ke=[{slug:"video-call",color:"purple",description:Le,shortDescription:"Manage and deploy customer-focused UI solutions for utilizing the Webex calling video queue on Cisco cloud-registered devices.",links:[{to:"https://call-queue.wbx.ninja/auth",label:"Demo Builder"}],logo:v.Cisco,name:"Cisco Device Video Queue",period:{from:new Date(2022,1,1),to:new Date},skills:B("svelte","ts","nodejs","sass","aws","docker","kubernetes"),type:"Website"},{slug:"webex-developer-portal",color:"#5e95e3",description:Oe,shortDescription:"The Webex developer portal to actively engage and support developers in seamlessly integrating with the Webex ecosystem, offering features like an API playground and card designers.",links:[{to:"https://developer.webex.com",label:"Webex Dev Portal"}],logo:v.WebexDev,name:"Webex Developer Portal",period:{from:new Date(2018,12,1),to:new Date(2022,1,1)},skills:B("reactjs","js","nodejs","webpack","reduxjs"),type:"Website"},{slug:"webex-web-browser",color:"#ff3e00",description:Re,shortDescription:"The official Webex browser client to offer all the features available on the desktop client, encompassing calling, meeting, and messaging capabilities.",links:[{to:"https://web.webex.com",label:"Webex Web Browser"}],logo:v.Webex,name:"Webex Browser Client",period:{from:new Date(2018,12,1),to:new Date(2022,1,1)},skills:B("reactjs","js","nodejs","webpack","reduxjs"),type:"Website",screenshots:[]},{slug:"webex-browser-sdk",color:"yellow",description:He,shortDescription:"The official Webex Browser SDK to deliver the latest Webex features in a browser environment, providing various browser capabilities, including WebRTC features.",links:[{to:"https://github.com/webex/webex-js-sdk",label:"Github"}],logo:v.WebexDev,name:"Webex Browser SDK",period:{from:new Date(2018,12,1),to:new Date(2022,1,1)},skills:B("ts","nodejs","webpack"),type:"JavaScript Library",screenshots:[]},{slug:"webex-office-addin",color:"green",description:Je,shortDescription:"The Official Webex Office 365 Add-in to enhances user's office suite products, providing a seamless experience.",links:[{to:"https://appsource.microsoft.com/en-us/product/office/WA200000068?tab=Overview",label:"Webex Add-in"}],logo:v.Office,name:"Office365 Webex Add-in",period:{from:new Date(2017,1,1),to:new Date(2018,11,1)},skills:B("reactjs","js","nodejs","webpack","reduxjs"),type:"Office365 Add-in"}];var ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},re={},Ue={get exports(){return re},set exports(e){re=e}};(function(e,f){(function(y,m){e.exports=m()})(ge,function(){var y=1e3,m=6e4,S=36e5,D="millisecond",M="second",O="minute",P="hour",I="day",N="week",T="month",F="quarter",j="year",E="date",Y="Invalid Date",X=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,H=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ae={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var a=["th","st","nd","rd"],n=s%100;return"["+s+(a[(n-20)%10]||a[n]||a[0])+"]"}},R=function(s,a,n){var r=String(s);return!r||r.length>=a?s:""+Array(a+1-r.length).join(n)+s},ee={s:R,z:function(s){var a=-s.utcOffset(),n=Math.abs(a),r=Math.floor(n/60),i=n%60;return(a<=0?"+":"-")+R(r,2,"0")+":"+R(i,2,"0")},m:function s(a,n){if(a.date()<n.date())return-s(n,a);var r=12*(n.year()-a.year())+(n.month()-a.month()),i=a.clone().add(r,T),d=n-i<0,u=a.clone().add(r+(d?-1:1),T);return+(-(r+(n-i)/(d?i-u:u-i))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:T,y:j,w:N,d:I,D:E,h:P,m:O,s:M,ms:D,Q:F}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},K="en",g={};g[K]=ae;var l="$isDayjsObject",o=function(s){return s instanceof k||!(!s||!s[l])},h=function s(a,n,r){var i;if(!a)return K;if(typeof a=="string"){var d=a.toLowerCase();g[d]&&(i=d),n&&(g[d]=n,i=d);var u=a.split("-");if(!i&&u.length>1)return s(u[0])}else{var b=a.name;g[b]=a,i=b}return!r&&i&&(K=i),i||!r&&K},p=function(s,a){if(o(s))return s.clone();var n=typeof a=="object"?a:{};return n.date=s,n.args=arguments,new k(n)},c=ee;c.l=h,c.i=o,c.w=function(s,a){return p(s,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var k=function(){function s(n){this.$L=h(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[l]=!0}var a=s.prototype;return a.parse=function(n){this.$d=function(r){var i=r.date,d=r.utc;if(i===null)return new Date(NaN);if(c.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var u=i.match(X);if(u){var b=u[2]-1||0,w=(u[7]||"0").substring(0,3);return d?new Date(Date.UTC(u[1],b,u[3]||1,u[4]||0,u[5]||0,u[6]||0,w)):new Date(u[1],b,u[3]||1,u[4]||0,u[5]||0,u[6]||0,w)}}return new Date(i)}(n),this.init()},a.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},a.$utils=function(){return c},a.isValid=function(){return this.$d.toString()!==Y},a.isSame=function(n,r){var i=p(n);return this.startOf(r)<=i&&i<=this.endOf(r)},a.isAfter=function(n,r){return p(n)<this.startOf(r)},a.isBefore=function(n,r){return this.endOf(r)<p(n)},a.$g=function(n,r,i){return c.u(n)?this[r]:this.set(i,n)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(n,r){var i=this,d=!!c.u(r)||r,u=c.p(n),b=function(G,W){var U=c.w(i.$u?Date.UTC(i.$y,W,G):new Date(i.$y,W,G),i);return d?U:U.endOf(I)},w=function(G,W){return c.w(i.toDate()[G].apply(i.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(W)),i)},x=this.$W,$=this.$M,L=this.$D,q="set"+(this.$u?"UTC":"");switch(u){case j:return d?b(1,0):b(31,11);case T:return d?b(1,$):b(0,$+1);case N:var _=this.$locale().weekStart||0,Q=(x<_?x+7:x)-_;return b(d?L-Q:L+(6-Q),$);case I:case E:return w(q+"Hours",0);case P:return w(q+"Minutes",1);case O:return w(q+"Seconds",2);case M:return w(q+"Milliseconds",3);default:return this.clone()}},a.endOf=function(n){return this.startOf(n,!1)},a.$set=function(n,r){var i,d=c.p(n),u="set"+(this.$u?"UTC":""),b=(i={},i[I]=u+"Date",i[E]=u+"Date",i[T]=u+"Month",i[j]=u+"FullYear",i[P]=u+"Hours",i[O]=u+"Minutes",i[M]=u+"Seconds",i[D]=u+"Milliseconds",i)[d],w=d===I?this.$D+(r-this.$W):r;if(d===T||d===j){var x=this.clone().set(E,1);x.$d[b](w),x.init(),this.$d=x.set(E,Math.min(this.$D,x.daysInMonth())).$d}else b&&this.$d[b](w);return this.init(),this},a.set=function(n,r){return this.clone().$set(n,r)},a.get=function(n){return this[c.p(n)]()},a.add=function(n,r){var i,d=this;n=Number(n);var u=c.p(r),b=function($){var L=p(d);return c.w(L.date(L.date()+Math.round($*n)),d)};if(u===T)return this.set(T,this.$M+n);if(u===j)return this.set(j,this.$y+n);if(u===I)return b(1);if(u===N)return b(7);var w=(i={},i[O]=m,i[P]=S,i[M]=y,i)[u]||1,x=this.$d.getTime()+n*w;return c.w(x,this)},a.subtract=function(n,r){return this.add(-1*n,r)},a.format=function(n){var r=this,i=this.$locale();if(!this.isValid())return i.invalidDate||Y;var d=n||"YYYY-MM-DDTHH:mm:ssZ",u=c.z(this),b=this.$H,w=this.$m,x=this.$M,$=i.weekdays,L=i.months,q=i.meridiem,_=function(W,U,Z,ne){return W&&(W[U]||W(r,d))||Z[U].slice(0,ne)},Q=function(W){return c.s(b%12||12,W,"0")},G=q||function(W,U,Z){var ne=W<12?"AM":"PM";return Z?ne.toLowerCase():ne};return d.replace(H,function(W,U){return U||function(Z){switch(Z){case"YY":return String(r.$y).slice(-2);case"YYYY":return c.s(r.$y,4,"0");case"M":return x+1;case"MM":return c.s(x+1,2,"0");case"MMM":return _(i.monthsShort,x,L,3);case"MMMM":return _(L,x);case"D":return r.$D;case"DD":return c.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return _(i.weekdaysMin,r.$W,$,2);case"ddd":return _(i.weekdaysShort,r.$W,$,3);case"dddd":return $[r.$W];case"H":return String(b);case"HH":return c.s(b,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return G(b,w,!0);case"A":return G(b,w,!1);case"m":return String(w);case"mm":return c.s(w,2,"0");case"s":return String(r.$s);case"ss":return c.s(r.$s,2,"0");case"SSS":return c.s(r.$ms,3,"0");case"Z":return u}return null}(W)||u.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(n,r,i){var d,u=this,b=c.p(r),w=p(n),x=(w.utcOffset()-this.utcOffset())*m,$=this-w,L=function(){return c.m(u,w)};switch(b){case j:d=L()/12;break;case T:d=L();break;case F:d=L()/3;break;case N:d=($-x)/6048e5;break;case I:d=($-x)/864e5;break;case P:d=$/S;break;case O:d=$/m;break;case M:d=$/y;break;default:d=$}return i?d:c.a(d)},a.daysInMonth=function(){return this.endOf(T).$D},a.$locale=function(){return g[this.$L]},a.locale=function(n,r){if(!n)return this.$L;var i=this.clone(),d=h(n,r,!0);return d&&(i.$L=d),i},a.clone=function(){return c.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},s}(),A=k.prototype;return p.prototype=A,[["$ms",D],["$s",M],["$m",O],["$H",P],["$W",I],["$M",T],["$y",j],["$D",E]].forEach(function(s){A[s[1]]=function(a){return this.$g(a,s[0],s[1])}}),p.extend=function(s,a){return s.$i||(s(a,k,p),s.$i=!0),p},p.locale=h,p.isDayjs=o,p.unix=function(s){return p(1e3*s)},p.en=g[K],p.Ls=g,p.p={},p})})(Ue);const ie=re;var le={},Ve={get exports(){return le},set exports(e){le=e}};(function(e,f){(function(y,m){e.exports=m()})(ge,function(){var y,m,S=1e3,D=6e4,M=36e5,O=864e5,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,I=31536e6,N=2628e6,T=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,F={years:I,months:N,days:O,hours:M,minutes:D,seconds:S,milliseconds:1,weeks:6048e5},j=function(g){return g instanceof ee},E=function(g,l,o){return new ee(g,o,l.$l)},Y=function(g){return m.p(g)+"s"},X=function(g){return g<0},H=function(g){return X(g)?Math.ceil(g):Math.floor(g)},ae=function(g){return Math.abs(g)},R=function(g,l){return g?X(g)?{negative:!0,format:""+ae(g)+l}:{negative:!1,format:""+g+l}:{negative:!1,format:""}},ee=function(){function g(o,h,p){var c=this;if(this.$d={},this.$l=p,o===void 0&&(this.$ms=0,this.parseFromMilliseconds()),h)return E(o*F[Y(h)],this);if(typeof o=="number")return this.$ms=o,this.parseFromMilliseconds(),this;if(typeof o=="object")return Object.keys(o).forEach(function(s){c.$d[Y(s)]=o[s]}),this.calMilliseconds(),this;if(typeof o=="string"){var k=o.match(T);if(k){var A=k.slice(2).map(function(s){return s!=null?Number(s):0});return this.$d.years=A[0],this.$d.months=A[1],this.$d.weeks=A[2],this.$d.days=A[3],this.$d.hours=A[4],this.$d.minutes=A[5],this.$d.seconds=A[6],this.calMilliseconds(),this}}return this}var l=g.prototype;return l.calMilliseconds=function(){var o=this;this.$ms=Object.keys(this.$d).reduce(function(h,p){return h+(o.$d[p]||0)*F[p]},0)},l.parseFromMilliseconds=function(){var o=this.$ms;this.$d.years=H(o/I),o%=I,this.$d.months=H(o/N),o%=N,this.$d.days=H(o/O),o%=O,this.$d.hours=H(o/M),o%=M,this.$d.minutes=H(o/D),o%=D,this.$d.seconds=H(o/S),o%=S,this.$d.milliseconds=o},l.toISOString=function(){var o=R(this.$d.years,"Y"),h=R(this.$d.months,"M"),p=+this.$d.days||0;this.$d.weeks&&(p+=7*this.$d.weeks);var c=R(p,"D"),k=R(this.$d.hours,"H"),A=R(this.$d.minutes,"M"),s=this.$d.seconds||0;this.$d.milliseconds&&(s+=this.$d.milliseconds/1e3,s=Math.round(1e3*s)/1e3);var a=R(s,"S"),n=o.negative||h.negative||c.negative||k.negative||A.negative||a.negative,r=k.format||A.format||a.format?"T":"",i=(n?"-":"")+"P"+o.format+h.format+c.format+r+k.format+A.format+a.format;return i==="P"||i==="-P"?"P0D":i},l.toJSON=function(){return this.toISOString()},l.format=function(o){var h=o||"YYYY-MM-DDTHH:mm:ss",p={Y:this.$d.years,YY:m.s(this.$d.years,2,"0"),YYYY:m.s(this.$d.years,4,"0"),M:this.$d.months,MM:m.s(this.$d.months,2,"0"),D:this.$d.days,DD:m.s(this.$d.days,2,"0"),H:this.$d.hours,HH:m.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:m.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:m.s(this.$d.seconds,2,"0"),SSS:m.s(this.$d.milliseconds,3,"0")};return h.replace(P,function(c,k){return k||String(p[c])})},l.as=function(o){return this.$ms/F[Y(o)]},l.get=function(o){var h=this.$ms,p=Y(o);return p==="milliseconds"?h%=1e3:h=p==="weeks"?H(h/F[p]):this.$d[p],h||0},l.add=function(o,h,p){var c;return c=h?o*F[Y(h)]:j(o)?o.$ms:E(o,this).$ms,E(this.$ms+c*(p?-1:1),this)},l.subtract=function(o,h){return this.add(o,h,!0)},l.locale=function(o){var h=this.clone();return h.$l=o,h},l.clone=function(){return E(this.$ms,this)},l.humanize=function(o){return y().add(this.$ms,"ms").locale(this.$l).fromNow(!o)},l.valueOf=function(){return this.asMilliseconds()},l.milliseconds=function(){return this.get("milliseconds")},l.asMilliseconds=function(){return this.as("milliseconds")},l.seconds=function(){return this.get("seconds")},l.asSeconds=function(){return this.as("seconds")},l.minutes=function(){return this.get("minutes")},l.asMinutes=function(){return this.as("minutes")},l.hours=function(){return this.get("hours")},l.asHours=function(){return this.as("hours")},l.days=function(){return this.get("days")},l.asDays=function(){return this.as("days")},l.weeks=function(){return this.get("weeks")},l.asWeeks=function(){return this.as("weeks")},l.months=function(){return this.get("months")},l.asMonths=function(){return this.as("months")},l.years=function(){return this.get("years")},l.asYears=function(){return this.as("years")},g}(),K=function(g,l,o){return g.add(l.years()*o,"y").add(l.months()*o,"M").add(l.days()*o,"d").add(l.hours()*o,"h").add(l.minutes()*o,"m").add(l.seconds()*o,"s").add(l.milliseconds()*o,"ms")};return function(g,l,o){y=o,m=o().$utils(),o.duration=function(c,k){var A=o.locale();return E(c,{$l:A},k)},o.isDuration=j;var h=l.prototype.add,p=l.prototype.subtract;l.prototype.add=function(c,k){return j(c)?K(this,c,1):h.bind(this)(c,k)},l.prototype.subtract=function(c,k){return j(c)?K(this,c,-1):p.bind(this)(c,k)}}})})(Ve);const Be=le;ie.extend(Be);const Qe=(e,f=new Date)=>{let y=0,m=0,S=0;return f.getFullYear()!==e.getFullYear()?(S=f.getMonth(),m=(f.getFullYear()-e.getFullYear()-1)*12,y=12-e.getMonth()):y=f.getMonth()-e.getMonth(),y+m+S+1},Ze=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],Xe=(e,f)=>`${e} | ${f}`;function en(e,f=new Date(Date.now()+1e3*60*60*24)){const y=ie(e),m=ie(f),S=ie.duration(m.diff(y));let D=0,M="day";return S.as("days")<=7?(M="day",D=S.as("days")):S.as("months")<=1?(M="week",D=S.as("weeks")):S.as("years")<=1?(M="month",D=S.as("months")):(M="year",D=S.as("years")),D=Math.trunc(D),`${Math.trunc(D)} ${M}${D>1?"s":""}`}function nn(e,f){const y=["logo","links","color","screenshots"];return f=f.toLowerCase(),e.filter(m=>ce(m,f,y))}function ce(e,f,y=[]){return Array.isArray(e)?e.some(m=>ce(m,f)):typeof e=="object"&&e!==null?e instanceof Date?[e.toString().toLowerCase(),e.toLocaleDateString("default",{month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("en-US").toLowerCase(),e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toLowerCase()].some(S=>S.includes(f)):Object.keys(e).some(m=>!y.includes(m)&&ce(e[m],f)):e.toString().toLowerCase().includes(f)}var V=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(V||{});const tn="Arash.K Portfolio",an={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills",Education:"Education"},on=e=>{switch(e){case z.GitHub:return V.GitHub;case z.Linkedin:return V.LinkedIn;case z.StackOverflow:return V.StackOverflow;case z.Facebook:return V.Facebook;case z.Email:return V.Email;case z.Twitter:return V.Twitter;case z.Youtube:return V.Youtube}},sn={title:"Home",name:"Arash",lastName:"K. Baghi",description:`Experienced full-stack developer with expertise in scalable web apps, specializing in ReactJs, Svelte, and Node.js with keen interest in DevOps engineering. 
		Led key projects for Cisco's major products such as Webex Browser client and SDK. 
		Outside of work, I enjoy nature, fitness and riding a motorcycle!`,links:[{platform:z.GitHub,link:"https://github.com/akoushke"},{platform:z.Linkedin,link:"https://www.linkedin.com/in/akoushke"},{platform:z.Twitter,link:"https://twitter.com/akoushke"},{platform:z.Email,link:"arash.koush@gmail.com"},{platform:z.Youtube,link:"https://www.youtube.com/@arashkoushkebaghi1432/"},{platform:z.Facebook,link:"https://www.facebook.com/akoushke/"}]},rn={title:"Projects",items:Ke},ln={title:"Experiences",items:Ye},cn={title:"Skills",items:me},dn={title:"Resumé",item:`${J}/resume.pdf`},un={title:"Search"},pn={items:be,title:"Education"};export{pn as E,sn as H,V as I,me as M,an as N,rn as P,dn as R,un as S,tn as T,oe as a,on as b,en as c,Ze as d,ln as e,Ye as f,qe as g,ge as h,Qe as i,Ke as j,nn as k,cn as l,Ge as o,ue as t,Xe as u};
