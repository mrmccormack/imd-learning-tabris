const {ScrollView, TextView, ui, app} = require('tabris');


app.registerFont('pacifico', 'https://github.com/eclipsesource/tabris-js/blob/master/snippets/resources/pacifico.ttf?raw=true');

let scrollView = new ScrollView({
  left: 0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);

let font = '20px pacifico';
new TextView({
  left: 16, top: 'prev() 24', right: 16,
  text: font
}).appendTo(scrollView);

new TextView({
  left: 16, top: 'prev() 8', right: 16,
  text: 'Sphinx of black quartz, judge my vow.  \n \n \ -Sphinx of black quartz, judge my vow.  \n \n \nSphinx of black quartz, judge my vow. Sphinx of black quartz... \n \n \nSphinx of black quartz, judge my vow. Sphinx of black quartz... \n \n \nSphinx of black quartz, judge my vow. Sphinx of black quartz...',
  font: font
}).appendTo(scrollView);
