const { TextView, device, ui } = require('tabris');

// Display available device information
[
  'platform',
  'version',
  'model',
  'vendor',
  'language',
  'orientation',
  'screenWidth',
  'screenHeight',
  'scaleFactor'
].forEach(property => {
  new TextView({
    id: property,
    left: 10,
    right: 10,
    top: 'prev() 10',
    text: property + ': ' + device[property]
  }).appendTo(ui.contentView)
})

function updateDeviceInfo () {
  [
    'platform',
    'version',
    'model',
    'vendor',
    'language',
    'orientation',
    'screenWidth',
    'screenHeight',
    'scaleFactor'
  ].forEach(property => {
    ui.contentView
      .find('#' + property)
      .set('text', property + ': ' + device[property])
  })
}

device.on('orientationChanged', ({ value: orientation }) => {
  updateDeviceInfo()
})
