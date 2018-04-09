const { Canvas, ui } = require('tabris')
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
new Canvas({ left: 0, top: 0, right: 0, bottom: 0 })
  .on('resize', ({ target: canvas, width, height }) => {
    let ctx = canvas.getContext('2d', width, height)
    let posX = width / 2
    let posY = height / 2
    ctx.moveTo(posX, posY)
    ctx.beginPath()
    ctx.arc(posX, posY, 93, 0, 2 * Math.PI, true)
    ctx.fillStyle = '#B3E5FC'
    ctx.fill()

    // draw the stroke
    ctx.lineWidth = 20
    ctx.strokeStyle = '#0288D1'
    ctx.stroke()

    ctx.moveTo(0, 0)
    ctx.beginPath()
    ctx.font = '24px'
    ctx.fillStyle = '#212121'
    ctx.textAlign = 'center'

    ctx.fillText('Logo', posX, posY)
  })
  .appendTo(ui.contentView)
