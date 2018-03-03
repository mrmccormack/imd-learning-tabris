/*
  Using zoomEnabled

  @version:2.4
  Snippet url:
  -  http://
  References:
  - https://eclipsesource.com/blogs/2017/12/22/tabris-js-2-3-released/

*/


const { ui, ImageView} = require('tabris');
// example of images side by side - Matt.

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const DICE_OFFSET = 30;

let diceImage1 = new ImageView({
  centerY: 0, width:100, height: 100,
  centerX: -DICE_OFFSET,
  image: IMAGE_PATH + '6.png',
  zoomEnabled: true,
  scaleMode: 'fill'
}).appendTo(ui.contentView);

let diceImage2 = new ImageView({
  centerY: 0,
  centerX: DICE_OFFSET,
  image: IMAGE_PATH + '1.png'

}).appendTo(ui.contentView);
