const {app,BrowserWindow} = require('electron')

let win;

function createWindow(){
	win = new BrowserWindow({
		height:100,
		width:200,
		webPreferences:{
			nodeIntegration:true
		}
	});

	console.log(__dirname)
	win.loadFile('index.html')
}

app.whenReady().then({createWindow});

app.on("window-all-closed",()=>{
	if(process.platform !== 'drawin')
		app.quit();
});


app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
	  createWindow()
	}
  })
