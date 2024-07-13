# Electron

---

[`Electron`](https://www.electronjs.org/) is an open-source framework that allows developers to build cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. Created by GitHub, Electron enables the development of desktop applications with a single codebase that can run on Windows, macOS, and Linux.

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

```javascript
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
```

> Electron empowers developers to create cross-platform desktop applications using web technologies. With its integration of Node.js and access to native APIs, Electron facilitates the development of feature-rich and scalable desktop applications.
