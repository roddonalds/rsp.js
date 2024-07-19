export default function (message, socket) {

    if (message.event === 'ingress') {

        //console.warn('Client ingress:');
        //console.debug('Client:', message.client);
        //console.debug('Service:', message.service);

        const isAllowed = this.checkAppClientIsAllowed(message.client);

        if (!isAllowed) {
            console.error('Client app not allowed:', message.client);
            return;
        } else {
            console.warn('Client app allowed:', message.client);
        }

        console.debug('Client segredo:', message.segredo);
        console.debug('this.segredo', this.segredo);

        if (message.segredo === this.segredo) {
            console.warn('Client segredo is correct:', message.segredo);
        } else {
            console.error('Client segredo is incorrect:', message.segredo);
            return;
        }

        if (this.connections.find(con => con.client === message.client)) {
            console.warn('Client already connected:', message.client);
            return;
        }

        if (message.service !== this.name) {
            console.error('Invalid service:', message.service);
            return;
        }

        let connection = {
            socket,
            client: message.client,
            segredo: message.segredo,
            service: message.service
        }

        this.connections.push(connection);
        
        //socket.emit('message', connection)
        //console.debug('Socket connected:', socketObjectParse(socket));
        //sconsole.debug('Clients:', socketObjectParse(this.clients));
    }
}