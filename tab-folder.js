/*
  TabFolder, Tab and WebView
  @version:2.4
  Snippet url:
  -  http://
  References:
  - https://tabrisjs.com/documentation/latest/api/TabFolder.html
*/

const {Button, Tab, TextInput, TabFolder, TextView, ImageView, ui} = require('tabris');

let tabFolder = new TabFolder({
  left: 0, top: 0, right: 0, bottom: 0,
  paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(ui.contentView);


let tabHome = new Tab({
    title: 'Tab 1', // converted to upper-case on Android
    image: {src: 'https://raw.githubusercontent.com/eclipsesource/tabris-js/master/snippets/resources/cart-filled.png', scale: 2},
    selectedImage: {src: 'https://raw.githubusercontent.com/eclipsesource/tabris-js/master/snippets/resources/cart-filled.png', scale: 2}
  }).appendTo(tabFolder);


let txt1 = new TextView({
    centerX: 0, centerY: 0,
    text: 'Content of Tab 1 '
  }).appendTo(tabHome);

new ImageView({
    centerX:0, top: 'prev() 10', width: 100, height: 100,
    image: 'https://previews.123rf.com/images/prolific/prolific1311/prolific131100010/23902374-sailing-yacht-logo.jpg',
    background: '#aaaaaa',
    scaleMode: 'fit'
  }).appendTo(tabHome);


let tabWeb = new Tab({
    title: 'Tab 2', // converted to upper-case on Android
    //image: {src: image, scale: 2},
    selectedImage: {src: 'http://weknowyourdreams.com/images/dice/dice-14.jpg', scale: 2}
  }).appendTo(tabFolder);

  let txt2 = new TextView({
    centerX: 0, top:0,
    text: 'Content of Tab 2 '
  }).appendTo(tabWeb);

new ImageView({
    centerX:0, top: 'prev() 10', width: 100, height: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhE5fecIX_k4DZL6KWcSkDZ55BQckW-U-XzOb5LoaMPmtcbeGxw',
    background: '#aaaaaa',
    scaleMode: 'fit'
  }).appendTo(tabWeb);



let tabTaylar = new Tab({
    title: 'Tab 2', // converted to upper-case on Android
    //image: {src: image, scale: 2},
    selectedImage: {src: 'http://weknowyourdreams.com/images/dice/dice-14.jpg', scale: 2}
  }).appendTo(tabFolder);

  let txt3 = new TextView({
    centerX: 0, top:0,
    text: 'Hey this is tab 3 Taylar '
  }).appendTo(tabTaylar);
