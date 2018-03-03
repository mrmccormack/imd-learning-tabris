const {Button, ui} = require('tabris');


// Create a push button that counts up on selection


let btnOK = new Button({
  class: 'main',
  left: 10, top: 'prev() 10', width:100,
  text: 'OK'
}).appendTo(ui.contentView);

let btnCancel = new Button({
  class: 'main',
  left: 10, top: 'prev() 10', width:100,
  text: 'Cancel'
}).appendTo(ui.contentView);

let btnReset = new Button({
  class: 'main',
  left: 10, top: 'prev() 10', width:100,
  text: 'Reset'
}).appendTo(ui.contentView);

// event outsite create new
btnReset.on('select', () => {
console.log ('you pressed reset');
ui.find('.main').set('textColor', 'red');
  })
