// simple example to play audio file

const { Button, ui } = require('tabris')
const SOUND_1 = 'http://static1.grsites.com/archive/sounds/cartoon/cartoon001.mp3'

let btnPlay = new Button({
  centerX: 0,
  centerY: 0,
  text: 'Play sound',
  background: 'blue',
  textColor: 'white',
  font: '24px'
}).appendTo(ui.contentView)

btnPlay.on('select', function () {
  playAudio(SOUND_1)
})

function playAudio (url) {
  let onSuccess = () => console.log('Audio file loaded successfully')
  let onError = err => console.log('Unable to play audio file: ' + err.code + ' - ' + err.message)
  let audioFile = new Media(url, onSuccess, onError)
  audioFile.play()
}
