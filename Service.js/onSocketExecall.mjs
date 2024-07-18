export default function (message, socket) {

    if (message.type === 'execall') {

        console.warn('Running onSocketExecall.js');

        console.log('Message:', message);
        console.log('Socket:', socket);
        
    }



    // console.log('Event:', message.event);
    // console.log('Socket:', message.socket);
}