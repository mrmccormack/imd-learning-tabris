const {Button, Video, ui} = require('tabris');

new Button({
  left: 0, top:0,
  text: 'Get'
}).on('select', () => {

}).appendTo(ui.contentView);

let button = new Button({
  id: 'button',
  centerX: 0, bottom: 16,
  text: '❚❚'
}).on('select', () => video.state === 'play' ? video.pause() : video.play())
  .appendTo(ui.contentView);

let video = new Video({
  left: 0, top: 0, right: 0, bottom: '#button 16',
  url: 'https://player.vimeo.com/external/135788180.sd.mp4?s=0a366925ff572514f5bca12f4bc38df0e7ec1a14&profile_id=112',
  controlsVisible: false
}).on('stateChanged', event => button.text = event.value !== 'pause' ? '❚❚' : '▶')
  .appendTo(ui.contentView);
