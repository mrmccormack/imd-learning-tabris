const { TextView, device, ui } = require('tabris')

// Display available device information
let list = [
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

list.forEach(property => {
  new TextView({
    id: property,
    left: 10,
    right: 10,
    top: 'prev() 10',
    text: property + ': ' + device[property]
  }).appendTo(ui.contentView)
})

function updateDeviceInfo () {
  list.forEach(property => {
    ui.contentView
      .find('#' + property)
      .set('text', property + ': ' + device[property])
  })
}

device.on('orientationChanged', () => {
  updateDeviceInfo()
})
