// simple example to play audio file

const { Button, ui } = require('tabris')

let btnPlay = new Button({
  centerX: 0,
  centerY: 0,
  text: 'Play sound',
  background: 'blue',
  textColor: 'white',
  font: '24px'
}).appendTo(ui.contentView)

btnPlay.on('select', function () {
  playAudio('http://static1.grsites.com/archive/sounds/cartoon/cartoon001.mp3')
})

function playAudio (url) {
  let onSuccess = () => console.log('Audio file loaded successfully')
  let onError = err => console.log('Unable to play audio file: ' + err.code + ' - ' + err.message)
  let audioFile = new Media(url, onSuccess, onError)
  audioFile.play()
}
