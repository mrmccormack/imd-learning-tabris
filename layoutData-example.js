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

ui.background = '#1485CC'

// color top bar
new TextView({
  layoutData: layoutPosition,
  text: 'Example of using layoutData and classes',
  font: 'bold 10px'
}).appendTo(ui.contentView)

let btnBigger = new Button({
  layoutData: layoutPosition,
  class: 'myButtons',
  text: 'Bigger buttons (left)'
}).appendTo(ui.contentView)

let btnSmaller = new Button({
  layoutData: layoutPosition,
  class: 'myButtons',
  text: 'Smaller buttons (right)'
}).appendTo(ui.contentView)

let btnReset = new Button({
  class: 'myButtons',
  layoutData: layoutPosition,
  text: 'Reset'
}).appendTo(ui.contentView)

// iOS use different default colors, so get them now
// no work on Android... 'initial' doesn't work either
const btnTextColor = btnBigger.textColor
console.log(btnTextColor)
const btnBackgroundColor = btnBigger.background
console.log(btnBackgroundColor)

btnBigger.on('select', () => {
  let layoutNew = { left: 0, top: 'prev() 30', width: 300 }
  ui.find('.myButtons').set('layoutData', layoutNew)
  console.log(btnBigger.background)
  ui.find('.myButtons').set('background', '#00f')
  ui.find('.myButtons').set('textColor', '#fff')
})

btnSmaller.on('select', () => {
  let layoutNew = { right: 0, top: 'prev() 5', width: 100 }
  ui.find('.myButtons').set('layoutData', layoutNew)
  ui.find('.myButtons').set('background', '#0f0')
  ui.find('.myButtons').set('textColor', '#fff')
})

btnReset.on('select', () => {
  ui.find('.myButtons').set('layoutData', layoutPosition)
  ui.find('.myButtons').set('background', btnBackgroundColor)
  ui.find('.myButtons').set('textColor', btnTextColor)
})
