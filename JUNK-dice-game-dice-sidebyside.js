const {ui, ImageView} = require('tabris');

// example of images side by side - Matt.

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';

let diceImage1 = new ImageView({
  centerY:0,
  left: '33%',
  image: IMAGE_PATH + '6.png'
}).appendTo(ui.contentView);

let diceImage2 = new ImageView({
  top: 'prev() -50',
  right: diceImage1.left,
  image: IMAGE_PATH + '1.png'

}).appendTo(ui.contentView);
