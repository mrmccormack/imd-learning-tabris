// Download HTTP content using the fetch API
// See https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const { Button, TextView, ui } = require('tabris')

new Button({ left: 16, right: 16, top: 'prev() 12', text: 'load' })
  .on('select', loadData)
  .appendTo(ui.contentView)

let textView = new TextView({ left: 16, right: 16, top: 'prev() 12' }).appendTo(
  ui.contentView
)

function loadData () {
  fetch('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js')
    .then(function (response) {
      return response.text()
    })
    .then(function (text) {
      textView.text = text
    })
}
