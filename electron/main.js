const { app, BrowserWindow } = require('electron')
const path = require ('path')
const url = require ('url')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
		webPreferences: {
			nodeIntegration: true
		}
    })

    // win.loadURL('http://localhost:3000')
	// win.webContents.openDevTools()
	
	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.join(__dirname, '../index.html'),
		protocol: 'file:',
		slashes: true
	});

	win.loadURL(startUrl);	
}

app.whenReady().then(() => {
    createWindow()
	
	app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})