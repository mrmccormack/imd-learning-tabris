/*
  Using classes and id's

  @version:2.4
  Snippet url:
  -  http://
  References:
  - https://tabrisjs.com/documentation/latest/selector.html

*/

const {ImageView, Button,app, ui, TextView} = require('tabris');

const GITHUB_URL = 'https://github.com/mrmccormack/imd-learning-tabris/blob/master/button-view-on-github.js';

let imgTabrisIcon = new ImageView({
    left: 10, top: 20, width:48, height:50,
    image: 'https://raw.githubusercontent.com/mrmccormack/imd-learning-tabris/master/images/tabris-icon.png'

}).appendTo(ui.contentView);

let imgGithubLink = new ImageView({
    right: 10, top: 20,
    image: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-48.png'
}).on({
  tap: () => app.launch(GITHUB_URL)
    .catch((e) => textView.text = e)
}).appendTo(ui.contentView);

let txtvDescription = new TextView({
  left: 10, top: 20, right: 10,
  text: 'Description \n goes here...',
  alignment: 'center',
  font: '12px'
}).appendTo(ui.contentView);
