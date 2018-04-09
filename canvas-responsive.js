const { Canvas, ui } = require('tabris')
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
// colors from: https://brandcolors.net/  Unity
ui.contentView.background = '#222c37'

new Canvas({ left: 0, right: 0, top: 0, bottom: 0 })
  .on('resize', ({ target: canvas, width, height }) => {
    let ctx = canvas.getContext('2d', width, height)
    let posX = width / 2
    let posY = height / 2

    let topMargin = height / 3
    let offSet = 15
    let rectWidth = 60
    let rectHeight = rectWidth

    ctx.fillStyle = '#00ccccaa'
    // draw('#221f1faa')
    ctx.fillRect(posX - offSet, topMargin, rectWidth, rectHeight)
    ctx.fillStyle = '#fff600aa'
    ctx.fillRect(posX, topMargin + offSet, rectWidth, rectHeight)
    ctx.fillStyle = '#ff0066aa'
    ctx.fillRect(posX + offSet, topMargin + offSet * 2, rectWidth, rectHeight)

    ctx.font = '24px'
    ctx.fillStyle = '#fff600aa'
    ctx.textAlign = 'center'

    ctx.fillText('Company', posX, posY + 80)

    function draw (c) {
      ctx.fillStyle = c
    }
  })
  .appendTo(ui.contentView)
