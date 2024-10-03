const { app, BrowserWindow } = require("electron");
let appWindow;

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // Ensure Node.js integration in the window
      contextIsolation: false
    }
  });

  appWindow.loadFile("dist/desck-app/index.html");

  appWindow.on("closed", function () {
    appWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
