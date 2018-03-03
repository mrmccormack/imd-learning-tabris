const {Action, NavigationView, ui} = require('tabris');

// Create an action with an image and a selection handler

let navigationView = new NavigationView({
  left: 0, top: 0, right: 0, bottom: 0,
  background: '#e7e7e7'
}).appendTo(ui.contentView);

new Action({
  title: 'Action',
  image: {
    src: device.platform === 'iOS' ? 'https://raw.githubusercontent.com/eclipsesource/tabris-js/v2.4.0/snippets/resources/share-black-24dp%403x.png' : 'https://raw.githubusercontent.com/eclipsesource/tabris-js/v2.4.0/snippets/resources/share-white-24dp%403x.png',
    scale: 3
  }
}).on('select', () => console.log('Action selected.'))
  .appendTo(navigationView);
