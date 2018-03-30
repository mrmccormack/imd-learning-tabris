// simple example to play audio file
// ref: https://github.com/apache/cordova-plugin-media#readme

const {Button, ui} = require('tabris');

const SOUND_1 = 'http://static1.grsites.com/archive/sounds/cartoon/cartoon001.mp3';
const SOUND_2 = 'http://static1.grsites.com/archive/sounds/cartoon/cartoon002.mp3';
const SOUND_3 = 'http://static1.grsites.com/archive/sounds/cartoon/cartoon003.mp3';

let btnPlay1 = new Button({
  centerX: 0,
  top: 100,
  text: 'Play sound 1',
  background: 'blue',
  textColor: 'white',
  font: '24px'
}).on('select', function() {
  playAudio(SOUND_1)
}).appendTo(ui.contentView);

let btnPlay2 = new Button({
  centerX: 0,
  top: 'prev() 10',
  text: 'Play sound 2',
  background: 'red',
  textColor: 'white',
  font: '24px'
}).on('select', function() {
  playAudio(SOUND_2)
}).appendTo(ui.contentView);

let btnPlay3 = new Button({
  centerX: 0,
  top: 'prev() 10',
  text: 'Play sound 3',
  background: 'green',
  textColor: 'white',
  font: '24px'
}).on('select', function() {
  playAudio(SOUND_3)
}).appendTo(ui.contentView);


function playAudio(url) {
  // Play the audio file at url
  var my_media = new Media(url,
    // success callback
    function() {
      console.log('playAudio(): ' + url + ' Audio Success');
    },
    // error callback
    function(err) {
      console.log('playAudio(): ' + url + 'Audio Error: ' + err);
    }
  );
  my_media.play();
}
