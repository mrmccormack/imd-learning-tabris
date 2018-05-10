const { ui, ImageView} = require('tabris');
// example of images side by side - Matt.

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const DICE_OFFSET = 30;

let diceImage1 = new ImageView({
  centerY: 0,
    width: 200,
  centerX: -DICE_OFFSET,
  image: IMAGE_PATH + 'seagull-1900657_640-blur.jpg'
}).appendTo(ui.contentView);

let diceImage2 = new ImageView({
  centerY: 0,
  width: 200,
  opacity: 0.4,
  centerX: DICE_OFFSET,
  image: IMAGE_PATH + 'seagull-1900657_640.jpg'

}).appendTo(ui.contentView);