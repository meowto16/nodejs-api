const timer = require('timers')
const EventEmitter = require('events')

const ee = new EventEmitter()

setTimeout(() => {
  console.log('Hello after 4 seconds')
}, 4 * 1000)

setTimeout((a, b) => {
  console.log('Callback timeout after 2 seconds. Arguments provided: ', a, b)
}, 2 * 1000, 'a', 'b')

// Task
// Print the following
// 'Hello after 5 seconds'
// 'Hello after 10 seconds'
// Use only one function

const helloFunction = (seconds) => console.log(`Hello after ${seconds} seconds`)
const countUntil = (timeStart, untilSeconds) => {
  const timeNow = Date.now()
  const timePassed = (timeNow - timeStart) / 1000

  console.log(`Interval. Time passed (seconds): ${timePassed}`)

  if (timePassed >= untilSeconds) ee.emit('countUntilEnd', timePassed, timeStart)
}

setTimeout(helloFunction, 5 * 1000, 5)
setTimeout(helloFunction, 10 * 1000, 10)

// Count until 10 seconds
const interval = setInterval(countUntil, 1000, Date.now(), 10)
ee.once('countUntilEnd', () => clearInterval(interval))

