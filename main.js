const { app, BrowserWindow, Menu } = require('electron')
const { autoUpdater } = require('electron-updater')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 900,
    minWidth: 900,
    minHeight: 700,
    icon: path.join(__dirname, 'book.ico'),
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#000',
      symbolColor: '#A25176',
      height: 25,
    },
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  win.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  createWindow()

  autoUpdater.checkForUpdatesAndNotify()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
