const {Video, ui} = require('tabris');

let video = new Video({
  left: 0, top: 0, right: 0,
  controlsVisible: true,
  autoPlay: true,
  url: 'http://peach.themazzone.com/durian/movies/sintel-1280-stereo.mp4',
}).appendTo(ui.contentView);
