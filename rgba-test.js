/*
  Using classes and id's

  @version:2.4.2
  Snippet url:
  -  http://
  References:
  - https://tabrisjs.com/documentation/latest/selector.html
*/

const { Button, ui } = require('tabris')

ui.background = 'red'

// this only colors top ???
let btnOK = new Button({
  layoutData: { centerX: 0, top: 'prev() 10', width: 100 },
  class: 'main',
  text: 'OK'
}).appendTo(ui.contentView)

let btnCancel = new Button({
  class: 'main',
  centerX: 0,
  top: 'prev() 10',
  width: 100,
  text: 'Cancel'
}).appendTo(ui.contentView)

let btnReset = new Button({
  id: 'reset',
  centerX: 0,
  top: 'prev() 10',
  width: 100,
  text: 'Reset'
}).appendTo(ui.contentView)

// event outsite create new declaration
btnReset.on('select', () => {
  //  using classes
  ui.find('.main').set('textColor', 'red')
  ui.apply({
    // end .apply
    '*': { background: '#ccc', width: 130 }
  })

  // apply using wildcards and multiple properties
  // using id
  ui.find('#reset').set('textColor', rgba(255, 0, 0, 0))
  ui.find('#reset').set('background', '#f00')
  // ui.find('#reset').set('textColor', 'white');
  console.log('you pressed btnReset')
})

// end event btnReset on('select')
// event outsite create new declaration
btnOK.on('select', () => {
  console.log(btnReset.background + ui.background)
})

// end event btnReset on('select')
function rgba (r, g, b, a) {
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
}
