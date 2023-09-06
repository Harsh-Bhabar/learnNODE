const EventEmitter = require('events');

//   class
class MyEmitter extends EventEmitter{

}

// init obj 
const myEmitter = new MyEmitter();

//event listner 
myEmitte.on('event', () => {
	console.log("event fired.")
})

// const Logger = require("./logger");
// const logger = new Logger();

// logger.on('message', (data) => console.log("called listener ", data));
// logger.log("Hello world");
// logger.log(" world");
// logger.log("Hello ");