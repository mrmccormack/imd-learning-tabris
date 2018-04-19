const { Button, ImageView, ui } = require('tabris')

const widthPhoto = 300
const heightPhoto = 400

const IMGURL = 'https://raw.githubusercontent.com/mrmccormack/imd-learning-tabris/master/images/'

function takePhoto () {
  let onSuccess = image => imgPhoto.image = image
  let onFail = message => console.log('Camera failed because: ' + message)
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    targetWidth: widthPhoto,
    targetHeight: heightPhoto,
    destinationType: window.Camera.DestinationType.FILE_URI
  })
}

function takeMonkey () {
  let onSuccess = image => imgPhoto.image = IMGURL + 'monkey.jpg'
  let onFail = message => console.log('Camera failed because: ' + message)
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    targetWidth: widthPhoto,
    targetHeight: heightPhoto,
    destinationType: window.Camera.DestinationType.FILE_URI
  })
}

let btnShutter = new Button({ centerX: 0, top: 40, text: 'Take Picture' })
  .on('select', () => {
    takePhoto()
  })
  .on('longpress', () => {
    takeMonkey()
  })
  .appendTo(ui.contentView)

let imgPhoto = new ImageView({
  top: 'prev() 10',
  class: 'image',
  width: widthPhoto,
  height: heightPhoto,
  centerX: 0,
  image: IMGURL + 'photo.png',
  scaleMode: 'fit',
  zoomEnabled: true
}).appendTo(ui.contentView)
