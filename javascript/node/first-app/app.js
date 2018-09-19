const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Raise a Listener
logger.on('messageLogged', (arg) => { // e or eventArg or whatever
  console.log('Listener called', arg);
})

logger.log('my new message');