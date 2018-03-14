const { Button, ui, ImageView} = require('tabris');
const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const DICE_OFFSET = 30;

diceImage1 = new ImageView({

  left: 150, width: 50, height: 50,

  image: IMAGE_PATH + '1.jpg'
}).appendTo(ui.contentView);

let diceImage2 = new ImageView({
    left: 50,  width: 50, height: 50,
  image: IMAGE_PATH + '6.jpg'

}).appendTo(ui.contentView);


// button with event inside
  let btnAnimate = new Button({
     left: 50,
    top: 'prev() 10',
    text: 'Animate',

  })
  .on('select', () => {
//console.log ('you pressed btnAnimate');

let rand = 1 + Math.floor(Math.random() * 6);
diceImage1.image = IMAGE_PATH + rand + '.jpg';

let rand1 = 1 + Math.floor(Math.random() * 6);
diceImage2.image = IMAGE_PATH + rand1 + '.jpg';
let messDoubles = "";
if (rand==rand1){
  messDoubles = "You rolled doubles: "
}
    else{
      messDoubles = "You rolled: "
    }


totalDice = rand1 + rand;
btnAnimate.text = messDoubles + totalDice;

diceImage2.animate({
  //opacity: 0,

  transform: {

    rotation: 6 * Math.PI,
    //scaleX: 2
  }


}, {
  duration: 200,
  easing: 'ease-out',
          repeat: 1,
    reverse: true,
}).then(() => label.dispose());


    diceImage1.animate({
  //opacity: 0,

  transform: {
    rotation: -4 * Math.PI,
    //scaleX: 2
  }
}, {
  duration: 300,
  easing: 'ease-out',
          repeat: 1,
    reverse: true,
}).then(() => label.dispose());


  }).appendTo(ui.contentView);
