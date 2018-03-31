const {TextInput, WebView, ui} = require('tabris');

// Create a web view to show a web page
const YOU_TUBE_VID ='<iframe width="560" height="315" src="https://www.youtube.com/embed/Qe_TTI64fJA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>;'

const YOUTUBEURL = 'BzMLA8YIgG0';
const MAINHEADING = 'Microsoft Surface Studio';
const MAINDESCRIPTION = 'Microsoft Surface Studio is a new category of device, designed to put you at the center of the creative process.';
const FOOTER = 'Surface Studio is designed for the creative process. The 28” PixelSense™ Display gives you a huge canvas for all kinds of work. Use it upright, or draw on it like a drafting tabl';

const HTMLTEMPLATE = '<!DOCTYPE html>\
<html lang="en">\
<head>\
  <meta charset="utf-8">\
  <meta name="robots" content="index, follow">\
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">\
  <meta http-equiv="x-ua-compatible" content="ie=edge">\
  <title>Spectre for Tabrisjs WebView</title>\
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.1/spectre.min.css">\
</head>\
<body>\
  <div class="bg-gray text-center p-2">\
    <h2>' + MAINHEADING + '</h2>\
    <p>' + MAINDESCRIPTION + '</p>\
  </div>\
  <div class="container">\
    <div class="columns">\
      <div class="column col-12">\
        <div class="video-responsive">\
          <iframe width="560" height="315" src="https://www.youtube.com/embed/' + YOUTUBEURL + '" allowfullscreen></iframe>\
        </div>\
        <small>' + FOOTER + '</small>\
      </div>\
    </div>\
  </div>\
</body>\
</html>';

let urlInput = new TextInput({
  left: 8, right: 8, top: 8,
  message: 'Enter URL...',
  text: 'http://en.wikipedia.org'
}).on('accept', loadUrl)
  .appendTo(ui.contentView);

let webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
}).appendTo(ui.contentView);

function loadUrl() {
  webView.html = HTMLTEMPLATE;
}

loadUrl();
