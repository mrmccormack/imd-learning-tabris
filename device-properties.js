const { app, device, TextView, ui } = require('tabris')

// Display available device information
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

propertyList.forEach(property => {
  new TextView({
    id: property,
    left: 10,
    right: 10,
    top: 'prev() 10',
    markupEnabled: true,
    text: property + ': <strong>' + device[property] + '</strong>'
  }).appendTo(ui.contentView)
})

let txvURL = new TextView({
  left: 10,
  bottom: 20,
  right: 10,
  text: 'http://docs.tabris.com/latest/api/device.html',
  textColor: '#333',
  alignment: 'center'
}).appendTo(ui.contentView)

txvURL.on({
  tap: () => app.launch('http://docs.tabris.com/latest/api/device.html')
})

function updateDeviceInfo () {
  propertyList.forEach(property => {
    ui.contentView
      .find('#' + property)
      .set('text', property + ': <strong>' + device[property] + '</strong>')
  })
}

device.on('orientationChanged', () => {
  updateDeviceInfo()
})
