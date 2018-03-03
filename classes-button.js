/*
Example of using classes
Tested on : Tabris.js 2.4
*/

const {Button, ui} = require('tabris');

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
  id: 'reset',
  left: 10, top: 'prev() 10', width:100,
  text: 'Reset'
}).appendTo(ui.contentView);

// event outsite create new
btnReset.on('select', () => {

//  using classes
ui.find('.main').set('textColor', 'red');
ui.apply({'*': {background: '#ccc'}}); // apply using wildcards

// using id
ui.find('#reset').set('textColor', 'white');
ui.find('#reset').set('background', '#f00');
ui.find('#reset').set('textColor', 'white');

console.log ('you pressed reset');


})  // end btnReset select
