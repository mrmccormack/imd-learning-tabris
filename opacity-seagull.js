const { Button, ui, ImageView} = require('tabris');
// example of images side by side - Matt.

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const DICE_OFFSET = 0;

let btnOpacity = new Button({ centerX: 0, top: 40, text: 'Sharpen' })
  .on('select', () => {
    blurPhoto.visible = false
    sharpPhoto.opacity = 1.0
  }).appendTo(ui.contentView)


let sharpPhoto = new ImageView({
  centerY: 0,
    width: 200,
  centerX: -DICE_OFFSET,
  image: IMAGE_PATH + 'seagull-1900657_640.jpg'
}).appendTo(ui.contentView);

let blurPhoto = new ImageView({
  centerY: 0,
  width: 200,
  opacity: 0.4,
  centerX: DICE_OFFSET,
  image: IMAGE_PATH + 'seagull-1900657_640-blur.jpg'

}).appendTo(ui.contentView);
     

let blurBackground = new ImageView({
  centerY: 0,
  centerX: 0,
  opacity: 0.4,
  scaleMode: 'fill',

  image: IMAGE_PATH + 'seagull-1900657_640-blur.jpg'

}).appendTo(ui.contentView);

