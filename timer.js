const { Button, ActivityIndicator, ui } = require('tabris')

const interval = 2000
const btnText = 'Press me'

let activityIndicator = new ActivityIndicator({
  centerX: 0,
  top: 200,
  tintColor: '#f00',
  visible: false
}).appendTo(ui.contentView)

let btnWait = new Button({
  centerX: 0,
  centerY: 0,
  text: btnText
}).appendTo(ui.contentView)

btnWait.on('select', ({ target }) => {
  target.text = 'Please wait ' + interval / 1000 + ' seconds...'
  target.enabled = false
  activityIndicator.visible = true
  setTimeout(sayThanks, interval, target)
})

function sayThanks (widget) {
  activityIndicator.visible = false
  widget.text = btnText
  widget.enabled = true
}
