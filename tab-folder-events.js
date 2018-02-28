const {Tab, TabFolder, TextView, ui, AlertDialog, Button} = require('tabris');
const IMAGE_PATH = 'https://raw.githubusercontent.com/eclipsesource/tabris-js/master/snippets/resources/';

// Create a swipe enabled tab folder with 3 tabs

// Create a push button that counts up on selection


let tabFolder = new TabFolder({
  left: 0, top: 0, right: 0, bottom: 0,
  paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(ui.contentView);


createTab('Cart', IMAGE_PATH + 'cart.png', IMAGE_PATH + 'cart-filled.png');
createTab('Pay', IMAGE_PATH + 'card.png', IMAGE_PATH + 'card-filled.png');
createTab('Statistic', IMAGE_PATH +  'chart.png', IMAGE_PATH + 'chart-filled.png');
createTab('Statistic', IMAGE_PATH +  'chart.png', IMAGE_PATH + 'chart-filled.png');


// example of doing 3 tings in an event and outside of new declaration
tabFolder.on('selectionChanged', ({value: tab}) =>
{
  new AlertDialog({
    message: '© 2018 Mr. M. - Free to use',
    buttons: {ok: 'OK'}
  }).open(); // end AlertDialog

// do some other things
console.log('hello world');
console.log(tab.title);
 }
 );  // end selectionChaned event


function createTab(title, image, seletedImage) {
  let tab = new Tab({
    title: title, // converted to upper-case on Android
    image: {src: image, scale: 2},
    selectedImage: {src: seletedImage, scale: 2}
  }).appendTo(tabFolder);
  new TextView({
    centerX: 0, centerY: 0,
    text: 'Content of Tab ' + title
  })
    new Button({
    centerX: 0, centerY: 0,
    text: 'TAP ME'
  }).on('select', () => tabFolder.selection = tab)


.appendTo(tab);

}

let count = 0;

new Button({
  left: 10, top: 10,
  text: 'Button',
  image: IMAGE_PATH + 'cart.png'
}).on('select', ({target}) => target.text = 'Pressed ' + (++count) + ' times')
  .appendTo(ui.contentView);
