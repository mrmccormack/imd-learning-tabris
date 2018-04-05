const { TextView, WebView, ImageView, ui } = require('tabris')

// Using WebView to play responsive YouTube video and responsive images. Utilizes https://picturepan2.github.io/spectre/
const introText = 'This text from Tabris, WebView below using Spectre.css for responsive images and video.'

const logo = 'https://eclipsesource.com/wp-content/uploads/2015/10/tabris-icon-logo-small.png'

const youtubeURL = 'BzMLA8YIgG0'

const relatedImage = 'https://edge.alluremedia.com.au/m/g/2017/05/SAM_0023-01-1.jpeg'

const mainHeading = 'Surface Studio'

const mainDescription = 'Microsoft Surface Studio is a new category of device, designed to put you at the center of the creative process.'

const footer = 'Surface Studio is designed for the creative process. The 28\u201D PixelSense\u2122 Display gives you a huge canvas for all kinds of work. Use it upright, or draw on it like a drafting table.'

const htmlTemplate = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="index, follow"><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"><meta http-equiv="x-ua-compatible" content="ie=edge"><title>Spectre for Tabrisjs WebView</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.1/spectre.min.css"></head><body><div class="bg-gray text-center p-2"><h3>' +
  mainHeading +
  '</h3><p>' +
  mainDescription +
  '</p>  </div>  <div class="container"><div class="columns"><div class="column col-12"><div class="video-responsive"><iframe width="560" height="315" src="https://www.youtube.com/embed/' +
  youtubeURL +
  '" allowfullscreen></iframe></div><small>' +
  footer +
  '</small><div><img class="img-responsive" src = ' +
  relatedImage +
  ' alt=""</div></div></div></div></body></html>'

new ImageView({
  centerX: 0,
  top: 15,
  width: 32,
  image: logo,
  scaleMode: 'fit'
}).appendTo(ui.contentView)

new TextView({
  left: 10,
  top: 'prev() 8',
  right: 10,
  text: introText,
  alignment: 'left'
}).appendTo(ui.contentView)

let webView = new WebView({
  left: 0,
  top: 'prev() 8',
  right: 0,
  bottom: 0
}).appendTo(ui.contentView)

function loadUrl () {
  webView.html = htmlTemplate
}

loadUrl()
