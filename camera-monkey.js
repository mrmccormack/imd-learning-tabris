const { Button, ImageView, ui } = require('tabris')

const widthPhoto = 300
const heightPhoto = 400

function takePhoto () {
imgPhoto.image = 'https://i.ytimg.com/vi/u5dT8Pm9ow4/hqdefault.jpg'
}

let btnShutter = new Button({ centerX: 0, top: 40, text: 'Take Picture' })
  .on('select', () => {
    takePhoto()
  }).appendTo(ui.contentView)

let imgPhoto = new ImageView({
  top: 'prev() 10',
  class: 'image',
  width: widthPhoto,
  height: heightPhoto,
  centerX: 0,
  image: 'https://raw.githubusercontent.com/mrmccormack/imd-learning-tabris/master/images/photo.png',
  scaleMode: 'fit',
  zoomEnabled: true
}).appendTo(ui.contentView)
