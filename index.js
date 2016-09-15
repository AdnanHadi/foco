const path = require('path')
const menubar = require('menubar')
const {Menu} = require('electron')

const mb = menubar({transparent: true,
  width: 340,
  height: 600,
  icon: path.join(__dirname, '/img/Icon.png')
})

const template = [{label: 'Foco',
    submenu: [{label: 'Reload',
      accelerator: 'CmdOrCtrl+R',
      click: (item, focusedWindow) => {
        if (focusedWindow) {
          focusedWindow.reload()
        }
      }
      },
      {
        label: 'Quit App',
        accelerator: 'CmdOrCtrl+Q',
        role: 'quit'
      },
      {
        label: 'Toggle DevTools',
        accelerator: 'Alt+Command+I',
        click: () => {
          mb.window.toggleDevTools()
        }
      }
    ]
   }
]

mb.on('ready', () => {
  console.log('app is ready')

// setting this manually otherwise it will go in left
  if (process.platform === 'linux') {
    mb.setOption('x', 930)
    mb.setOption('y', 10)
  }

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})
