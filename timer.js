const { Button, ActivityIndicator, ui } = require('tabris')

const interval = 2000

let activityIndicator = new ActivityIndicator({
  centerX: 0,
  top: 200,
  visible: false
}).appendTo(ui.contentView)

let btnWait = new Button({
  centerX: 0,
  centerY: 0,
  text: 'Press me!'
}).appendTo(ui.contentView)

btnWait.on('select', ({ target }) => {
  target.text = 'Please wait...'
  activityIndicator.visible = true
  setTimeout(sayThanks, interval, target)
})

function sayThanks (widget) {
  widget.text = 'Thank you!'
  activityIndicator.visible = false
}
