const { Button, ImageView, ui } = require('tabris')

function takePicture () {
  let onSuccess = image => imgPhoto.image = image
  let onFail = message => console.log('Camera failed because: ' + message)
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    targetWidth: 1024,
    targetHeight: 1024,
    destinationType: window.Camera.DestinationType.FILE_URI
  })
}

let btnShutter = new Button({
  id: 'pictureButton',
  centerX: 0,
  top: 'prev() 10',
  width: 100,
  text: 'Tacke Picture'
})
  .on('select', () => {
    console.log('hi')
    takePicture()
  })
  .appendTo(ui.contentView)

let imgPhoto = new ImageView({
  top: 'prev() 10',
  class: 'image',
  width: 200,
  height: 200,
  centerX: 0,
  zoomEnabled: true
}).appendTo(ui.contentView)
