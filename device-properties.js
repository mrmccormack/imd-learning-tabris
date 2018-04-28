const { app, Button, device, TextView, ui } = require('tabris')

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
