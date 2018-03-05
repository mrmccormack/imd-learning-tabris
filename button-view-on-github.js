/*
  Using classes and id's

  @version:2.4
  Snippet url:
  -  https://github.com/mrmccormack/imd-learning-tabris/blob/master/button-view-on-github.md
  References:
  - https://tabrisjs.com/documentation/latest/selector.html

*/

const {ImageView, Button,app, ui, TextView, ProgressBar} = require('tabris');

const GITHUB_URL = 'https://github.com/mrmccormack/imd-learning-tabris/blob/master/button-view-on-github.md';
const TABRIS_URL = 'https://tabrisjs.com/documentation/latest/';

let imgTabrisIcon = new ImageView({
    left: 10, top: 20, width:48, height:50,
    image: 'https://raw.githubusercontent.com/mrmccormack/imd-learning-tabris/master/images/tabris-icon.png'
  }).on({
    tap: () => app.launch(TABRIS_URL)
      .catch((e) => textView.text = e)
  }).appendTo(ui.contentView);

let imgGithubLink = new ImageView({
    right: 10, top: 20,
    image: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-48.png'
}).on({
  tap: () => app.launch(GITHUB_URL)
    .catch((e) => textView.text = e)
}).appendTo(ui.contentView);


let txtDescription = new TextView({
  left: 10, top: 20, right: 10,
  text: 'Description \n goes here...',
  alignment: 'center',
  font: '12px'
}).appendTo(ui.contentView);



let progressBar = new ProgressBar({
  left: 15, right: 15, top: 80,
  maximum: 300,
  selection: 1
}).appendTo(ui.contentView);

let progress = 10 ;

for (i = 0; i < 40; i++) {
    //text += "The number is " + i + "<br>";
  progress = i * 10;
 setTimeout(setProgress, 20);
//  console.log (text);
}

function setProgress() {
  // txtDescription.text = 'Thank you!' + progress.toString();
  progressBar.selection = progress;
}
