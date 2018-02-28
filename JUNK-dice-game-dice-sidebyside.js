const { ui, ImageView} = require('tabris');
// example of images side by side - Matt.

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const DICE_OFFSET = 30;

let diceImage1 = new ImageView({
  centerY: 0,
  centerX: -DICE_OFFSET,
  image: IMAGE_PATH + '6.png'
}).appendTo(ui.contentView);

let diceImage2 = new ImageView({
  centerY: 0,
  centerX: DICE_OFFSET,
  image: IMAGE_PATH + '1.png'

}).appendTo(ui.contentView);
