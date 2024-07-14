# TypeScript

---

[`TypeScript`](https://www.typescriptlang.org/) is an open-source programming language developed by Microsoft. Positioned as a superset of JavaScript, TypeScript introduces static typing to enhance the development process by catching errors at compile time and providing a richer tooling experience.

Key features of TypeScript include:

- **Static Typing**: Allows developers to define types for variables, function parameters, and return values, providing early error detection and improving code robustness.

- **ES6+ Features**: Inherits and extends the features of ECMAScript (ES6 and beyond), enabling the use of modern JavaScript syntax and features.

- **Interfaces and Classes**: Supports the creation of interfaces and classes to define clear contracts and encapsulate functionality.

- **Generics**: Enables the creation of flexible and reusable components by using generics to parameterize types.

- **Compilation to JavaScript**: TypeScript code is transpiled to standard JavaScript, ensuring compatibility with all JavaScript environments.

- **Tooling Support**: Benefits from excellent tooling, including code editors like Visual Studio Code, which provides intelligent code completion, navigation, and refactoring.

- **Declaration Files**: Allows the use of declaration files (`.d.ts`) to describe the shape of external libraries and JavaScript code.

- **Popular in Frontend Development**: Widely adopted in frontend development, especially in Angular projects, where it serves as the primary language.

<br/>

## Example

```typescript
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
    return `Hello, ${person.firstName} ${person.lastName}! ${this.greeting}`;
  }
}

const greeter = new Greeter('Welcome');

const user: Person = { firstName: 'John', lastName: 'Doe' };

console.log(greeter.greet(user));
```

> TypeScript enhances JavaScript development by introducing static typing, interfaces, classes, and other features. It provides early error detection, improves code maintainability, and is widely embraced in both frontend and backend development.
