const { Slider, Button, ImageView, TextView, ui } = require('tabris')

function onSuccess (acceleration) {
  txvAccelerationX.text = 'Acceleration X: ' + acceleration.x
  txvAccelerationY.text = 'Acceleration Y: ' + acceleration.y
  txvAccelerationZ.text = 'Acceleration Z: ' + acceleration.z
  txvTimeStamp.text = 'Timestamp: ' + getFormattedDate(acceleration.timestamp)
  sldTiltX.selection = acceleration.x * 10
  sldTiltY.selection = acceleration.y * 10
  sldTiltZ.selection = acceleration.z * 10
  imgMarble.left = 20 * acceleration.x + 50

  let xRound = acceleration.x.toFixed(1)
  let yRound = acceleration.y.toFixed(1)
  // console.log(xRound + ' ' + yRound)
  if (xRound === yRound) {
    console.log('level')
    btnLevel.textColor = 'green'
    btnLevel.text = '* LEVEL *'
  } else {
    btnLevel.textColor = 'red'
    btnLevel.text = 'Not Level'
  }
}

function onError () {
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

let imgMarble = new ImageView({
  left: 50,
  top: 'prev() 10',
  width: 60,
  height: 60,
  image: 'https://raw.githubusercontent.com/mrmccormack/imd-learning-tabris/master/images/marble.png',
  scaleMode: 'fit'
}).appendTo(ui.contentView)

let sldTiltX = new Slider({
  left: 10,
  top: 'prev() 30',
  right: 10,
  minimum: -100,
  selection: 50,
  maximum: 100
}).appendTo(ui.contentView)

let sldTiltY = new Slider({
  left: 10,
  top: 'prev() 30',
  right: 10,
  minimum: -100,
  selection: 50,
  maximum: 100
}).appendTo(ui.contentView)

let sldTiltZ = new Slider({
  left: 10,
  top: 'prev() 30',
  right: 10,
  minimum: -100,
  selection: 50,
  maximum: 100
}).appendTo(ui.contentView)

let btnLevel = new Button({
  centerX: 0,
  top: 'prev() 30',
  text: 'Not Level',
  textColor: 'red'
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

  let str = date.getFullYear() +
    '-' +
    month +
    '-' +
    day +
    ' \xBB ' +
    hour +
    ':' +
    min +
    ':' +
    sec

  return str
}
