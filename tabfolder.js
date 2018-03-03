/*
  TabFolder, Tab and WebView

  @version:2.4
  Snippet url:
  -  http://
  References:
  - https://tabrisjs.com/documentation/latest/api/TabFolder.html

*/

const {Button, Tab, TextInput, TabFolder, TextView, ImageView, ui, WebView} = require('tabris');

let tabFolder = new TabFolder({
  left: 0, top: 0, right: 0, bottom: 0,
  paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(ui.contentView);

let tab = new Tab({
    title: 'Tab 1', // converted to upper-case on Android
    //image: {src: image, scale: 2},
    //selectedImage: {src: 'http://weknowyourdreams.com/images/dice/dice-14.jpg', scale: 2}
  }).on({
    appear: ({target}) => console.log(`${target.title} aaa appeared`),
    disappear: ({target}) => console.log(`${target.title} aaa disappeared`)
  }).appendTo(tabFolder);

let txt1 = new TextView({
    centerX: 0, centerY: 0,
    text: 'Content of Tab 1 '
  }).appendTo(tab);

  new ImageView({
    centerX:0, top: 'prev() 10', width: 100, height: 100,
    image: 'http://weknowyourdreams.com/images/dice/dice-14.jpg',
    background: '#aaaaaa',
    scaleMode: 'fit'
  }).appendTo(tab);


let tab1 = new Tab({
    title: 'Tab 2', // converted to upper-case on Android
    //image: {src: image, scale: 2},
    selectedImage: {src: 'http://weknowyourdreams.com/images/dice/dice-14.jpg', scale: 2}
  }).on({
    appear: ({target}) => console.log(`${target.title} xxxappeared`),
    disappear: ({target}) => console.log(`${target.title} xxxdisappeared`)
  }).appendTo(tabFolder);

  let txt2 = new TextView({
    centerX: 0, top:0,
    text: 'Content of Tab 2 '
  }).appendTo(tab1);


  // Create a web view to show a web page

let urlInput = new TextInput({
  left: 8, right: 8, top: 8,
  message: 'Enter URL...',
  text: 'http://en.wikipedia.org'
}).on('accept', loadUrl)
.appendTo(tab1);

let webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
 }).appendTo(tab1);

function loadUrl() {
  webView.url = urlInput.text;
}

loadUrl();
