const {Button, TextView, TextInput, WebView, ui} = require('tabris');

const INITIAL_TEXT = '![](https://cdn2.iconfinder.com/data/icons/nodejs-1/64/nodejs-64.png)\n# Heading \n- one \n- two \n---\n \
Instant and elegant Markdown documents\n```js\n \
alert("Hello")\; \n```' ;

const MESSAGE = 'Enter Markdown...';
const TITLE = 'Strapdown.js';

new TextView({
  left: 8, right: 8, top: 16,
  text: 'Enter some Markdown:',
}).appendTo(ui.contentView);

let txiMarkDown = new TextInput({
  left: 8, right: 8, top: 'prev() 10',
  message: MESSAGE,
  type: 'multiline', height: 100,
  text: INITIAL_TEXT
}).appendTo(ui.contentView);

let btnRenderMarkDown = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Render Markdown'
  })
.appendTo(ui.contentView);

btnRenderMarkDown.on('select', () => {
  renderMarkdown();
})

// This will render each time text is changed
// txiMarkDown.on('textChanged', () => {
//   renderMarkdown();
// })

let webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
}).appendTo(ui.contentView);

function renderMarkdown() {
  let HTML_TEMPLATE =  '<!DOCTYPE html>\
  <html>\
  <title>' + TITLE + '</title>\
  <xmp theme="Cerulean" style="display:none;">\
  ' + txiMarkDown.text + '</xmp>\
  <script src="http://strapdownjs.com/v/0.2/strapdown.js"></script>\
  </html>';
  webView.html = HTML_TEMPLATE;
}

// render when loaded
renderMarkdown();
