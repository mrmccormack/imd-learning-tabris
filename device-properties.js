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



let btnSourceCode = new Button({
  bottom: 20,
  centerX: 0,
  image: 'https://raw.githubusercontent.com/mrmccormack/imd-learning-tabris/master/images/github-32.png',
  text: ' View JS source'
}).appendTo(ui.contentView)

btnSourceCode.on({
  select: () => app.launch('http://docs.tabris.com/latest/api/device.html')
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
