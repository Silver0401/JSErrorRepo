const { app, BrowserWindow } = require('electron')
const { systemPreferences } = require('electron')


// let microphone = systemPreferences.askForMediaAccess("microphone")

console.log(systemPreferences.isDarkMode())

function createWindow () {

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  win.loadFile('tester.html')

  win.webContents.openDevTools()
}


app.whenReady().then(createWindow)

// app.allowRendererProcessReuse = false

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow() 
  }
})










