const {app,BrowserWindow} = require('electron');
const path = require('path');

//创建主窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1150,
        height: 750,
        autoHideMenuBar: true,  // 自动隐藏菜单栏
        frame: true, //移除整个框架
        resizable: false,
        icon: './georgewu.ico',
        webPreferences: {
            preload: path.resolve(__dirname, './preload.js'),
            devTools: false
        }, //绑定中间人：预加载进程
    })
    win.loadFile('pages/index.html')
}


//当准备好时创建主窗口
app.whenReady().then(() => {
    createWindow()
})

//当所有窗口都被关闭时退出应用
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

