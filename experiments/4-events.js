const { getEventListeners, EventEmitter } = require('events')

class MyEmitter extends EventEmitter {}

const ee = new MyEmitter()

const exampleSubscriber = (name, a, b) => {
  console.log(`===${name} subscriber===`)
  console.log(a, b)
  console.log(`===${name} subscriber end===`)
  console.log('')
}

const firstSubscriber = (a, b) => exampleSubscriber('First', a, b)
const secondSubscriber = (a, b) => exampleSubscriber('Second', a, b)
const thirdSubscriber = (a, b) => exampleSubscriber('Third', a, b)
const onceSubscriber = (a, b) => exampleSubscriber('Once', a, b)

// Subscribe to event
ee.addListener('example', firstSubscriber);
ee.on('example', secondSubscriber) // alias for ee.addListener
ee.on('example', thirdSubscriber)

// Subscribe to event only once
ee.once('example', onceSubscriber)

// Emit event
ee.emit('example', 'First time called: a', 'First time called: b');
ee.emit('example', 'Second time called: a', 'Second time called: b');

console.log('Emitter all event names: ', ee.eventNames())
console.log('Event "example" listeners count: ', ee.listenerCount('example'))

// Remove listener
ee.removeListener('example', secondSubscriber)
ee.off('example', thirdSubscriber) // alias for ee.removeListener

// Remove all listeners
ee.removeAllListeners('example')

// Set max listeners, useful to check memory leaks
ee.setMaxListeners(10)

// Get all event listeners
console.log(getEventListeners(ee, 'example'))
