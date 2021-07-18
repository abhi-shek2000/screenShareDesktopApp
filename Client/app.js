const {app, BrowserWindow, ipcMain} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width: 500,
        height: 150,
        webPreferences:{
            nodeIntegration: true,
        }
        
    })
    win.removeMenu();
    win.loadFile('index.html');

}

app.whenReady().then(createWindow)


app.on('window-all-closed', ()=> {
    if(process.platform != 'darwin'){
        app.quit()
    }
})


app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length == 0){
        createWindow()
    }
})


ipcMain.on("start-share", function(event, arg) {

})


ipcMain.on("stop-share", function(event, arg) {

})