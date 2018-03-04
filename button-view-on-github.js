const {ImageView, Button,app, ui} = require('tabris');

const GITHUB_URL = 'https://github.com/mrmccormack/tabris_playground/blob/master/snippets/pg-imageview-scalemode.js';


let imgGithubLink = new ImageView({
    centerX: 0, top: 'prev() 10',
    image: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-48.png',
    scaleMode: 'none'
}).on({
  tap: () => app.launch(GITHUB_URL)
    .catch((e) => textView.text = e)
}).appendTo(ui.contentView);
