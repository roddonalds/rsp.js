
// This function logs a message to the console and returns the message.

function termlog (first, ...args) {

    
    console.debug('first', first)
    console.debug('...arguments', ...arguments)

    
    // programs code...
    console.warn(' running: termlog()')
    
    // starts here.
    console.log(...arguments);

}

termlog.error = function () {

    console.warn(' running: termlog()')
    console.debug('...arguments', ...arguments)

    // programs code starts
    console.error(...arguments);
}

termlog.warn = function () {

    console.warn(' running: termlog()')
    console.debug('...arguments', ...arguments)

    // programs code starts
    console.warn(' running: termloog.warn()')
    
}

termlog.debug = function () {

    console.warn(' running: termlog()')
    console.debug('...arguments', ...arguments)

    // programs code starts
    console.debug(' running: termloog.debug()')

}


export default termlog;