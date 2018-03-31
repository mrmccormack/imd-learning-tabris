const {TextView, WebView, ImageView, ui} = require('tabris');

// Create a web view to show a web page

const INTRO_TEXT = 'This text from Tabris, WebView below.';

const LOGO = 'https://eclipsesource.com/wp-content/uploads/2015/10/tabris-icon-logo-small.png';

const YOUTUBE_URL = 'BzMLA8YIgG0';

const RELATED_IMAGE = 'https://edge.alluremedia.com.au/m/g/2017/05/SAM_0023-01-1.jpeg';

const MAIN_HEADING = 'Surface Studio';

const MAIN_DESCRIPTION = 'Microsoft Surface Studio is a new category of device, designed to put you at the center of the creative process.';

const FOOTER = 'Surface Studio is designed for the creative process. The 28” PixelSense™ Display gives you a huge canvas for all kinds of work. Use it upright, or draw on it like a drafting table.';

const HTML_TEMPLATE = '<!DOCTYPE html>\
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
    <h3>' + MAIN_HEADING + '</h3>\
    <p>' + MAIN_DESCRIPTION + '</p>\
  </div>\
  <div class="container">\
    <div class="columns">\
      <div class="column col-12">\
        <div class="video-responsive">\
          <iframe width="560" height="315" src="https://www.youtube.com/embed/' + YOUTUBE_URL + '" allowfullscreen></iframe>\
        </div>\
        <small>' + FOOTER + '</small>\
        <div><img class="img-responsive" src = ' + RELATED_IMAGE + ' alt=""</div>\
      </div>\
    </div>\
  </div>\
</body>\
</html>';



new ImageView({
    centerX:0,  top: 15, width: 32,
    image: LOGO,
    scaleMode: 'fit'
  }).appendTo(ui.contentView);

new TextView({
  left: 10, top: 'prev() 8', right: 10,
  text: INTRO_TEXT,
  alignment: 'left'
}).appendTo(ui.contentView);



let webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
}).appendTo(ui.contentView);

function loadUrl() {
  webView.html = HTML_TEMPLATE;
}

loadUrl();
