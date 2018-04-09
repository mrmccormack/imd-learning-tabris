const { TextView, Canvas, ui, app } = require('tabris')
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
// colors from: https://brandcolors.net/  Unity
ui.contentView.background = '#222c37'

new Canvas({ left: 0, right: 0, top: 0, bottom: 0 })
  .on('resize', ({ target: canvas, width, height }) => {
    let ctx = canvas.getContext('2d', width, height)
    let posX = width / 2

    const offSet = 15
    const rectWidth = 60
    const rectHeight = rectWidth
    const topRectangle = height / 4
    const topLogo = topRectangle + rectHeight + 5 * offSet

    ctx.fillStyle = '#00ccccaa'
    // draw('#221f1faa')
    let leftMargin = posX - offSet - rectWidth / 2

    ctx.fillRect(leftMargin, topRectangle, rectWidth, rectHeight)
    ctx.fillStyle = '#fff600aa'

    ctx.fillRect(
      leftMargin + offSet,
      topRectangle + offSet,
      rectWidth,
      rectHeight
    )
    ctx.fillStyle = '#ff0066aa'

    ctx.fillRect(
      leftMargin + offSet * 2,
      topRectangle + offSet * 2,
      rectWidth,
      rectHeight
    )

    ctx.font = '20px'
    ctx.fillStyle = '#fff600aa'
    ctx.textAlign = 'center'

    setTimeout(showLogo, 1000)

    function showLogo () {
      ctx.fillText('Unity Technologies', posX, topLogo)
    }
    function draw (c) {
      ctx.fillStyle = c
    }
  })
  .appendTo(ui.contentView)

let txvURL = new TextView({
  left: 10,
  bottom: 20,
  right: 10,
  text: 'unity3d.com',
  textColor: '#ccc',
  alignment: 'center'
}).appendTo(ui.contentView)

txvURL.on({ tap: () => app.launch('https://unity3d.com') })
