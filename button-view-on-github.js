/*
  Using classes and id's

  @version:2.4
  Snippet url:
  -  http://
  References:
  - https://tabrisjs.com/documentation/latest/selector.html

*/

const {ImageView, Button,app, ui} = require('tabris');


const GITHUB_URL = 'https://github.com/mrmccormack/imd-learning-tabris/blob/master/button-view-on-github.js';

let imgTabrisIcon = new ImageView({
    centerX: 0, top: 'prev() 10',
    image: 'https://raw.githubusercontent.com/mrmccormack/imd-learning-tabris/master/images/tabris-icon.png',
    scaleMode: 'none'
}).appendTo(ui.contentView);


let imgGithubLink = new ImageView({
    centerX: 0, bottom: 0,
    image: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-48.png',
    scaleMode: 'none'
}).on({
  tap: () => app.launch(GITHUB_URL)
    .catch((e) => textView.text = e)
}).appendTo(ui.contentView);
