 const { app, BrowserWindow } = require('electron')

const createWindow = async () => {

    var mainWindow = new BrowserWindow({

        width: 800,
        height: 600,

    })

    mainWindow.loadFile('index.html')
    
}

 app.whenReady().then(createWindow)