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
  // Play the audio file at url
  var audioFile = new Media(
    url,
    // success callback
    function () {
      console.log('playAudio():Audio Success')
    },
    // error callback
    function (err) {
      console.log('playAudio():Audio Error: ' + err)
    }
  )
  // Play audio
  audioFile.play()
}
