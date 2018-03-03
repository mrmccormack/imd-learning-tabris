/*
  Using classes and id's

  @version:2.4
  Snippet url:
  -  http://
  References:
  - https://tabrisjs.com/documentation/latest/selector.html
*/


const {Button, ui} = require('tabris');

ui.background = 'red'; // this only colors top ???

let btnOK = new Button({
  class: 'main',
  centerX: 0,
  top: 'prev() 10',
  width: 100,
  text: 'OK'
}).appendTo(ui.contentView);

let btnCancel = new Button({
  class: 'main',
  centerX: 0,
  top: 'prev() 10',
  width: 100,
  text: 'Cancel'
}).appendTo(ui.contentView);

let btnReset = new Button({
  id: 'reset',
  centerX: 0,
  top: 'prev() 10',
  width: 100,
  text: 'Reset'
}).appendTo(ui.contentView);

// event outsite create new declaration
btnReset.on('select', () => {

  //  using classes
  ui.find('.main').set('textColor', 'red');
  ui.apply({
    '*': {
      background: '#ccc',
      width: 130
    } // end .apply
  }); // apply using wildcards and multiple properties

  // using id
  ui.find('#reset').set('textColor', 'white');
  ui.find('#reset').set('background', '#f00');
  ui.find('#reset').set('textColor', 'white');

  console.log('you pressed btnReset');

}) // end event btnReset on('select')
