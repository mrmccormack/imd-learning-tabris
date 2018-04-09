const { Canvas, ui } = require('tabris')
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
const posX = screen.width / 2
const posY = screen.height / 2

new Canvas({ left: 0, top: 0, right: 0, bottom: 0 })
  .on('resize', ({ target: canvas, width, height }) => {
    let ctx = canvas.getContext('2d', width, height)

    ctx.moveTo(posX, posY)
    ctx.beginPath()
    ctx.arc(120, 120, 93, 0, 2 * Math.PI, true)
    ctx.fillStyle = '#E2FFC6'
    ctx.fill()

    // draw the stroke
    ctx.lineWidth = 20
    ctx.strokeStyle = '#66CC01'
    ctx.stroke()

    ctx.moveTo(0, 0)
    ctx.beginPath()
    ctx.font = '24px'
    ctx.fillStyle = 'green'
    ctx.textAlign = 'center'

    ctx.fillText('Logo', posX, posY)

    ctx.beginPath()
    ctx.moveTo(175, 50)
    ctx.lineTo(100, 75)
    ctx.lineTo(100, 25)
    ctx.fill()

    // Cubic curves example
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.moveTo(75, 40)
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25)
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120)
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40)
    ctx.fill()
  })
  .appendTo(ui.contentView)
