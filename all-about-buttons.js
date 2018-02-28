const {ToggleButton,Button, ui} = require('tabris');

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';


// Create a toggle button with a checked handler

let togglebutton1 = new ToggleButton({
  left: 10, top: 10,
  text: 'checked',
  checked: true
}).on('checkedChanged', event => event.target.text = event.value ? 'checked' : 'not checked')
  .appendTo(ui.contentView);



let togglebutton2 = new ToggleButton({
  left: 10, top: 'prev() 10',
  text: 'checked',
  checked: true
}).on('checkedChanged', event => event.target.text = event.value ? 'checked' : 'not checked')
  .appendTo(ui.contentView);


// button with event outside
let resetbutton = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Reset',
    image: 'https://github.com/mrmccormack/imd-learning-tabris/blob/master/images/card.png?raw=true'
  })
.appendTo(ui.contentView);

// event outsite create new
resetbutton.on('select', () => {
console.log ('you pressed reset');
console.log (IMAGE_PATH);
  })


// button with event inside
  let resetbutton1 = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Reset1',
    // for some reason, constant and image no work???
    image: 'https://github.com/mrmccormack/imd-learning-tabris/blob/master/images/card.png?raw=true'
  })
  .on('select', () => {
console.log ('you pressed reset1');
console.log (IMAGE_PATH);


  }).appendTo(ui.contentView);
