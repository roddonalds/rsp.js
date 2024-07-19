Service.prototype.startCheckingconnections = function (interval = 5000) {

    setInterval(() => {

        console.warn('Checking connections...');
        console.debug('connections length:', Object.keys(this.connections).length);
        console.debug('connections:', socketObjectParse(this.connections));

        for (const key in this.connections) {

            if (this.connections.hasOwnProperty(key)) {

                const socket = this.connections[key].socket;

                console.debug('Checking client:', key);
                console.debug('Client socket:', socketObjectParse(socket));

                // Check if the socket is still alive
                if (!this.isSocketAlive(socket)) {
                    console.log(`Removing inactive socket: ${key}`);
                    delete this.connections[key];
                }
            }
        }

    }, interval);
};
