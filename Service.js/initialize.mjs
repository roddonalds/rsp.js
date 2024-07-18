import net from 'net';
import onSocketIngress from './onSocketIngress.mjs';
import { socketObjectParse } from '../Utils.js/index.mjs';

export default function (segredo) {

    if (!segredo) {
        throw new Error('Segredo is required to initialize the service');
    }''

    this.segredo = segredo;

    this.server = net.createServer(socket => {

        console.debug('socket creeated', socket.toString());

        // socket.on('message', data => {
        //     console.debug('socket.on(message)')
        //     console.debug('data', data)
        // })

        // socket.on('custom', (data) => {
        //     console.debug('socket.on(custom)')
        //     console.debug('data', data)
        // })

        socket.on('data', (message) => {

            message = Buffer.from(message, 'base64').toString('ascii'); 
            message = JSON.parse(message);

            console.debug('socket.on(data)', message);

            if (!message) {
                console.error('Invalid message:', message);
                return;
            }

            if (!message.event) {
                console.error('Invalid message event:', message.event);
                return;
            }

            onSocketIngress.call(this, message, socket);

        });

    });

    this.server.listen(this.port, this.address, () => {
        
        this.setupEventHandlers();
        
        setInterval(() => {
            console.log('Connections', this.connections);
        }, 3 * 9000)
        
        console.log('Service listening:', this.address, this.port);

    });

}