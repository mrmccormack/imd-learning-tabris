const {fs, Button, TextView, TextInput, ui} = require('tabris');


/*
This works locally - but file must exist or it can't be read


*/


    let file = fs.filesDir + '/hello1.txt';
    //  ok, this works.. > file written: /local/hello.txt
    // and is located in:
    // C:\Users\Rob Acer Aspire 3\AppData\Local\Packages\EclipseSource.Tabris.js2_en185yn5qwkmw\LocalState\hello.txt

console.log(file);

// button with event outside
let btnReadFile = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Read File' + file,
    image: {src:'https://github.com/mrmccormack/imd-learning-tabris/blob/master/images/card.png?raw=true', scale: 1}

  })
.appendTo(ui.contentView);

// event outsite create new
btnReadFile.on('select', () => {
console.log ('you pressed btnReadFile');
fs.readFile(file, 'utf-8')
  .then(text => myText.text = text)
  .then(text => myLabel.text = text)
  // .then(text => console.log('read text from %s:', file, text))

  .catch(err => console.error(err));

  console.log('hi');

  // fs.writeFile(file, 'Hello World! ReadPlease Corporation- where is it Rob McCormack Sun 25-Mar-18 11:02 AM ', 'ascii')
  // .then(() => console.log('file written:', file))
  // .catch(err => console.error(err));
  })



  // button with event outside
  let btnWriteFile = new Button({
      centerX: 0,
      top: 'prev() 10',
      text: 'Write File' + file,
      image: {src:'https://github.com/mrmccormack/imd-learning-tabris/blob/master/images/card.png?raw=true', scale: 1}

    })
  .appendTo(ui.contentView);

  // event outsite create new
  btnWriteFile.on('select', () => {
  console.log ('you pressed btnWriteFile');
  let ss = myText.text;
  console.log (ss);

  fs.writeFile(file, myText.text, 'utf-8')
  // fs.writeFile(file, str2ab(myText.Text), 'utf-8')
  .then(() => console.log('file written:', file))
  .catch(err => console.error(err));
    })





// Create a text input field with input finished listener

let myText =  new TextInput({
  top: 'prev() 20', left: '20%', right: '20%', height: 100,
          type: 'multiline',
  message: 'Type here, then confirm'
}).on('accept', ({text}) => {
  new TextView({
    top: 'prev() 20', left: '20%',
    text: text,
    markupEnabled: true,

  }).appendTo(ui.contentView);
}).appendTo(ui.contentView);


let myLabel = new TextView({
  left: '30%', top: 'prev() 20', right: '30%',
  text: 'Left',
  alignment: 'left',
  markupEnabled: true,
  type: 'multiline',

}).appendTo(ui.contentView);


// fs.writeFile(file, 'Hello World! ReadPlease Corporation- where is it Rob McCormack Sun 25-Mar-18 11:02 AM ', 'ascii')
// .then(() => console.log('file written:', file))
// .catch(err => console.error(err));
