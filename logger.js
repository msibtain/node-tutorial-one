const EventEmitter = require('events');

class Logger extends EventEmitter
{
    log(message) {
        console.log('in logger log ', message);

        this.on("myMessage", )
    }
}

module.exports = Logger;