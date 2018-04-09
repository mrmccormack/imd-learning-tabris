const {app,  RefreshComposite, CheckBox, ImageView, ScrollView, TextView, ui} = require('tabris')

let counter = 1

let recRefresh = new RefreshComposite({ left: 0, right: 0, top: 0, bottom: 0 })
  .on(
    'refresh',
    ({ target }) => setTimeout(
      () => {
        target.refreshIndicator = false
        // app.reload()
        textView.text = `last refresh: ${new Date()}\n${textView.text}`
        imvPicture.image = 'https://source.unsplash.com/collection/1163637/160x9' + counter
        counter = counter + 1
      },
      1000
    )
  )
  .appendTo(ui.contentView)

let scrollView = new ScrollView({
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}).appendTo(recRefresh)

new TextView({
  left: 0,
  right: 0,
  top: 32,
  alignment: 'center',
  font: 'black 24px',
  text: 'pull to refresh'
}).appendTo(scrollView)

let imvPicture = new ImageView({
  centerX: 0,
  top: 'prev() 10',
  width: 160,
  height: 90,
  image: 'https://source.unsplash.com/collection/1163637/160x90',
  background: '#aaaaaa',
  scaleMode: 'fill'
}).appendTo(scrollView)

const textView = new TextView({
  left: 0,
  right: 0,
  top: 'prev() 32',
  alignment: 'center',
    font: '8px',
  lineSpacing: 1.4
}).appendTo(scrollView)

new CheckBox({
  left: 16,
  right: 16,
  bottom: 16,
  text: 'Enable pull to refresh',
  checked: true
})
  .on(
    'checkedChanged',
    ({ value: checked }) => recRefresh.refreshEnabled = checked
  )
  .appendTo(ui.contentView)
