const {Button, TextInput, WebView, ui} = require('tabris');

let urlInput = new TextInput({
  left: 8, right: 8, top: 8,
  message: 'Enter URL...',
  type: 'multiline', height: 100,
  text: 'http://en.wikipedia.org'
}).appendTo(ui.contentView);

// button with event outside
let resetbutton = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: '  Reset'

  })
.appendTo(ui.contentView);

// event outsite create new
resetbutton.on('select', () => {
console.log ('you pressed reset');
console.log (urlInput.text);
  let HTML_TEMPLATE =  '<!DOCTYPE html>\
<html>\
<title>Hello Strapdown</title>\
<xmp theme="united" style="display:none;">\
' + urlInput.text + '</xmp>\
<script src="http://strapdownjs.com/v/0.2/strapdown.js"></script>\
</html>'

 webView.html = HTML_TEMPLATE;
  })


let HTML_TEMPLATE =  '<!DOCTYPE html>\
<html>\
<title>Hello Strapdown</title>\
<xmp theme="united" style="display:none;">\
' + urlInput.text + '</xmp>\
<script src="http://strapdownjs.com/v/0.2/strapdown.js"></script>\
</html>'
// Create a web view to show a web page



let webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
}).appendTo(ui.contentView);

function loadUrl() {
  webView.html = HTML_TEMPLATE;
}

loadUrl();
