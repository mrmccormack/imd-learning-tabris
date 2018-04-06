const { Button, ui } = require('tabris')

const interval = 2000

let btnWait = new Button({
  centerX: 0,
  centerY: 0,
  text: 'Press me!'
}).appendTo(ui.contentView)

btnWait.on('select', ({ target }) => {
  target.text = 'Please wait...'
  setTimeout(sayThanks, interval, target)
})

function sayThanks (widget) {
  widget.text = 'Thank you!'
}
