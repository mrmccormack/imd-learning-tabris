const {TextView, TextInput, WebView, ui} = require('tabris');

// Enable the drawer and append a widget to it

let drawer = ui.drawer;

drawer.enabled = true;

drawer.on('open', () => console.log('drawer opened'))
  .on('close', () => console.log('drawer closed'));

let arrow = String.fromCharCode(8592);
createLabel(arrow + ' Swipe from left or tap here')
  .on('tap', () => drawer.open())
  .appendTo(ui.contentView);

createLabel('Thank you!')
  .on('tap', () => drawer.close())
  .appendTo(drawer);

function createLabel(text) {
  return new TextView({
    left: 10, centerY: 0,
    text: text,
    font: '22px Arial'
  });
}

// Create a web view to show a web page

let urlInput = new TextInput({
  left: 8, right: 8, top: 8,
  message: 'Enter URL...',
  text: 'https://gist.githubusercontent.com/mrmccormack/05cc33af3dc99ee55c74235e70926884/raw/adafc9ac607811af03691bfaa5ea5ec5f7ebdb21/manifest.json'
}).on('accept', loadUrl)
  .appendTo(drawer);

let webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
}).appendTo(drawer);

function loadUrl() {
  webView.url = urlInput.text;
}

loadUrl();
