const { Button, TextView, ui } = require('tabris')

function onSuccess(acceleration) {
  txvAccelerationX.text = 'Acceleration X: ' + acceleration.x
  txvAccelerationY.text = 'Acceleration Y: ' + acceleration.y
  txvAccelerationZ.text = 'Acceleration Z: ' + acceleration.z
  txvTimeStamp.text = 'Timestamp: ' + getFormattedDate(acceleration.timestamp)
}

function onError() {
  console.log('onError!')
}

// updates every 1/4 second, 250 ms.

const options = { frequency: 250 }

let watchID = navigator.accelerometer.watchAcceleration(
  onSuccess,
  onError,
  options
)

let txvAccelerationX = new TextView({
  left: 10,
  top: 'prev() 10',
  right: 10,
  text: 'Acceleration X: ',
  alignment: 'left'
}).appendTo(ui.contentView)

let txvAccelerationY = new TextView({
  left: 10,
  top: 'prev() 10',
  right: 10,
  text: 'Acceleration Y: ',
  alignment: 'left'
}).appendTo(ui.contentView)

let txvAccelerationZ = new TextView({
  left: 10,
  top: 'prev() 10',
  right: 10,
  text: 'Acceleration Z: ',
  alignment: 'left'
}).appendTo(ui.contentView)

let txvTimeStamp = new TextView({
  left: 10,
  top: 'prev() 10',
  right: 10,
  text: 'Timestamp: ',
  alignment: 'left'
}).appendTo(ui.contentView)

function getFormattedDate () {
  let date = new Date()

  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()

  month = (month < 10 ? '0' : '') + month
  day = (day < 10 ? '0' : '') + day
  hour = (hour < 10 ? '0' : '') + hour
  min = (min < 10 ? '0' : '') + min
  sec = (sec < 10 ? '0' : '') + sec

  let str =
    date.getFullYear() +
    '-' +
    month +
    '-' +
    day +
    ' » ' +
    hour +
    ':' +
    min +
    ':' +
    sec

  return str
}
