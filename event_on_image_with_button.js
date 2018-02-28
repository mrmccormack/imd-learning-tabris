const {ui, ImageView, AlertDialog, Button} = require('tabris');
// example of images side by side - Matt.

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const DICE_OFFSET = 30;

// long pressing will cause doubles to roll all the time
let cheatMode = false;

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
    image: {src:IMAGE_PATH + '6.png', scaleMode:'fill'},
 // no work   tintColor: '#ffffff',

  })
.appendTo(ui.contentView);

// event outsite create new
diceImage1.on('tap', () => {
console.log ('diceImage1');

if (cheatMode) {

var rand = 1 + Math.floor(Math.random() * 6);
diceImage1.image = IMAGE_PATH + rand + '.png';
diceImage2.image = IMAGE_PATH + rand + '.png';


} else {
var rand = 1 + Math.floor(Math.random() * 6);
diceImage1.image = IMAGE_PATH + rand + '.png';
var rand = 1 + Math.floor(Math.random() * 6);
diceImage2.image = IMAGE_PATH + rand + '.png';

}

})

diceImage2.on('tap', () => {
console.log ('diceImage2');
var rand = 1 + Math.floor(Math.random() * 6);
diceImage1.image = IMAGE_PATH + rand + '.png';
var rand = 1 + Math.floor(Math.random() * 6);
diceImage2.image = IMAGE_PATH + rand + '.png';
  })

diceImage1.on('longpress', () => {
console.log ('Entering Cheat Mode - Good luck');
cheatMode = true;

  })
