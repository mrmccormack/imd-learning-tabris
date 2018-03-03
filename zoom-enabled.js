/*
  Using zoomEnabled

  @version:2.4
  Snippet url:
  -  http://
  References:
  - https://eclipsesource.com/blogs/2017/12/22/tabris-js-2-3-released/

*/
const {ui, contentView, ImageView} = require('tabris');


let imageView = new ImageView({
  left: 0, right: 0, top: 0, bottom: 0,
  image: 'https://raw.githubusercontent.com/eclipsesource/tabris-js/v2.4.0/snippets/resources/salad.jpg',
  zoomEnabled: true
}).appendTo(ui.contentView);
