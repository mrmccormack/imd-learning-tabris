// simple example to play audio file


const {Button, ui} = require('tabris');

var my_media = new Media('http://static1.grsites.com/archive/sounds/cartoon/cartoon001.mp3');
//my_media.play();

let btnPlay = new Button({
  centerX: 0, centerY: 0,
    text: 'Play sound',
  font: '24px'
}).on("select", function() {
  my_media.play();
}).appendTo(ui.contentView);
