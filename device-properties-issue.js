const { app, device, TextInput, ui } = require('tabris')

// Display available device information for submtting issues
let propertyList = [
  'platform',
  'version',
  'model',
  'vendor',
  'language',
  'orientation',
  'screenWidth',
  'screenHeight',
  'scaleFactor'
]

const version = 'Tabris.js version: ' + app.version + '\n'

let txiList = new TextInput({
  left: 10,
  right: 10,
  top: 'prev() 10',
  type: 'multiline'
}).appendTo(ui.contentView)

function getProperties () {
  txiList.text = '### Environment \n' + version
  propertyList.forEach(property => {
    txiList.text = txiList.text + property + ': ' + device[property] + '\n'
  })
}

getProperties()

device.on('orientationChanged', () => {
  getProperties()
})
