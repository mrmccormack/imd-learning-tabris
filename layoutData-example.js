/*
  Using classes and id's

  @version:2.4.2
  Snippet url:
  -  http://
  References:
  - https://tabrisjs.com/documentation/latest/selector.html
*/

const { Button, TextView, ui } = require('tabris')

let layoutPosition = { centerX: 0, top: 'prev() 10', width: 200 }
const initialLayout = layoutPosition

ui.background = '#1485CC'

// color top bar
new TextView({
  layoutData: layoutPosition,
  text: 'Example of using layoutData and classes'
}).appendTo(ui.contentView)

let btnBigger = new Button({
  layoutData: layoutPosition,
  class: 'myButtons',
  text: 'Bigger buttons'
}).appendTo(ui.contentView)

let btnSmaller = new Button({
  layoutData: layoutPosition,
  class: 'myButtons',
  text: 'Smaller buttons'
}).appendTo(ui.contentView)

let btnReset = new Button({
  class: 'myButtons',
  layoutData: layoutPosition,
  text: 'Reset'
}).appendTo(ui.contentView)

btnReset.on('select', () => {
  let layoutPosition = initialLayout
  ui.find('.myButtons').set('layoutData', layoutPosition)
  ui.find('.myButtons').set('background', 'initial')
  ui.find('.myButtons').set('textColor', 'initial') // initial is color only
})

btnBigger.on('select', () => {
  let layoutPosition = { left: 0, top: 'prev() 30', width: 300 }
  ui.find('.myButtons').set('layoutData', layoutPosition)
  ui.find('.myButtons').set('background', '#00f')
  ui.find('.myButtons').set('textColor', '#fff')
})

btnSmaller.on('select', () => {
  let layoutPosition = { right: 0, top: 'prev() 5', width: 100 }
  ui.find('.myButtons').set('layoutData', layoutPosition)
  ui.find('.myButtons').set('background', '#0f0')
  ui.find('.myButtons').set('textColor', '#fff')
})
