const { Button, TextView, ui } = require('tabris')

function onSuccess (acceleration) {
  console.log(
    'Acceleration X: ' +
      acceleration.x +
      '\n' +
      'Acceleration Y: ' +
      acceleration.y +
      '\n' +
      'Acceleration Z: ' +
      acceleration.z +
      '\n' +
      'Timestamp: ' +
      acceleration.timestamp +
      '\n'
  )
}

function onError () {
  console.log('onError!')
}

const options = { frequency: 3000 }

// Update every 3 seconds
let watchID = navigator.accelerometer.watchAcceleration(
  onSuccess,
  onError,
  options
)
