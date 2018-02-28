const {ui, ImageView, AlertDialog, Button} = require('tabris');
// example of images side by side - Matt.

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const DICE_OFFSET = 30;

let diceImage1 = new ImageView({
  centerY:0,
  centerX: -DICE_OFFSET,
  image: IMAGE_PATH + '6.png'
}).appendTo(ui.contentView);

let diceImage2 = new ImageView({
  centerY:0,
  centerX: DICE_OFFSET,
  image: IMAGE_PATH + '1.png'
}).appendTo(ui.contentView);


// button with event outside
let resetbutton = new Button({
    centerX: 0,
    top: 'prev() 10',
    image: {src:IMAGE_PATH + '6.png', scaleMode:'fill'}
  })
.appendTo(ui.contentView);

// event outsite create new
resetbutton.on('select', () => {
console.log ('you pressed reset');
console.log (IMAGE_PATH);
  })
