 const { app, BrowserWindow } = require('electron')

const createWindow = async () => {

    var mainWindow = new BrowserWindow({

        width: 800,
        height: 600,

    })

    await mainWindow.loadFile('./src/pages/editor/index.html')
    
}

 app.whenReady().then(createWindow)

 //app.on('activate', () => {})