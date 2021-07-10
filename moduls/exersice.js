const { print } = require('../module1')


const doSomething = (data) => {
	print(data)
	console.log("doing something with " + data);
}


module.exports.doSomething = doSomething;

/////



const print = (message) => log(message, new Date())

const log = (message, timestamp) =>
   console.log(`${timestamp.toString()}: ${message}`)

module.exports = { print, log }
