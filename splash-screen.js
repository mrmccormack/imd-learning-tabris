const { ActivityIndicator, Canvas, Button, ui, device, app } = require('tabris')

ui.contentView.background = '#3f51b5'

// Create the activity indicator centered in the page
let activityIndicator = new ActivityIndicator({ left: 0, centerY: 0 }).appendTo(
  ui.contentView
)

ui.statusBar.background = '#f00'
ui.statusBar.displayMode = 'default'


// ui.statusBar.height = 40 // no work it's read only

// https://tabrisjs.com/mrmccormack/apps/// Create reload button
let reloadButton = new Button({ left: 0, top: 90, text: 'Run Task' })
  .on('select', () => executeLongRunningTask())
  .appendTo(ui.contentView)

function executeLongRunningTask () {
  // Toggle visibility of elements
  activityIndicator.visible = true
  reloadButton.visible = true

  setTimeout(
    () => {
      // Async action is done
      activityIndicator.visible = false
      reloadButton.visible = true
    },
    2500
  )
}

executeLongRunningTask()

// Draw shapes on a canvas using HTML5 Canvas API
let canvas = new Canvas({ left: 10, top: 10, right: 10, bottom: 10 })
  .on('resize', ({ target: canvas, width, height }) => {
    let scaleFactor = device.scaleFactor
    let ctx = canvas.getContext(
      '2d',
      width * scaleFactor,
      height * scaleFactor
    )
    ctx.scale(scaleFactor, scaleFactor)
    ctx.strokeStyle = 'rgb(78, 154, 217)'
    ctx.lineWidth = 10
    ctx.moveTo(20, 20)
    // ctx.lineTo(width - 40, height - 40);
    ctx.stroke()

    // draw image
    ctx.putImageData(createImageData(80, 40), 100, 100)
  })
  .appendTo(ui.contentView)

let count = 0

let btnMain = new Button({ left: 10, top: 10, text: 'Button', visible: false })
  .on('select', ({ target }) => target.text = 'Pressed ' + ++count + ' times')
  .appendTo(ui.contentView)

new Button({ centerX: 0, centerY: 0, text: 'Press me!' })
  .on('select', ({ target }) => {
    target.text = 'Please wait...'
    setTimeout(sayThanks, 2000, target)
    app.reload()
  })
  .appendTo(ui.contentView)

function sayThanks (widget) {
  widget.text = 'Thank you!'
  canvas.visible = false
  btnMain.visible = true
}

function createImageData (width, height) {
  let array = []
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let alpha = x % 20 > y % 20 ? 255 : 0
      array.push(200, 0, 0, alpha)
    }
  }
  return new ImageData(new Uint8ClampedArray(array), width, height)
}

setTimeout(sayThanks1, 2000)

function sayThanks1 () {
  ui.contentView.background = 'initial'
  canvas.visible = false
  btnMain.visible = true
}
