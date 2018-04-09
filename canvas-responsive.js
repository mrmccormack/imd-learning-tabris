const { Canvas, ui } = require('tabris')
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
ui.contentView.background = '#e50914'

new Canvas({ centerX: 0, centerY: 0 })
  .on('resize', ({ target: canvas, width, height }) => {
    let ctx = canvas.getContext('2d', width, height)
    let posX = width / 2
    let posY = height / 2

    let topMargin = height / 3
    let topOffSet = 15
    let rectWidth = 60
    let rectHeight = rectWidth

    ctx.fillStyle = '#221f1faa'
    ctx.fillRect(posX - 40, topMargin, rectWidth, rectHeight)
    ctx.fillStyle = '#221f1f'
    ctx.fillRect(posX, topMargin + topOffSet, rectWidth, rectHeight)
    ctx.fillStyle = '#f5f5f1'
    ctx.fillRect(
      posX + 25,
      topMargin + topOffSet * 2,
      rectWidth,
      rectHeight
    )
    ctx.font = '24px'
    ctx.fillStyle = '#221f1f'
    ctx.textAlign = 'center'

    ctx.fillText('Company', posX, posY + 80)
  })
  .appendTo(ui.contentView)
