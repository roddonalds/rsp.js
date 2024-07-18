import net from 'net';

export default function (options) {

    if (!options) {
        throw new Error('Options are required');
    }

    const clientName = options.client,
        serviceName = options.service,
        serviceSegredo = options.segredo;

    if (!serviceName) {
        throw new Error('Service name is required');
    }

    if (!clientName) {
        throw new Error('Client name is required');
    }

    if (!serviceSegredo) {
        throw new Error('Segredo is required');
    }

    return new Promise(resolve => {

        const port = 8080,
            address = '127.0.0.1';

        let socket = new net.createConnection({ port, address }, () => {

            console.log('socket connected')

            socket.event = {};
            socket.handlers = {};

            socket.send = function (ev, data) {
                console.log('emitting', ev, data)
                data.event = ev;
                socket.write(JSON.stringify(data));
            }

            socket.receive = function (ev, callback) {
                console.debug('socket.receive', ev)
                socket.handlers[ev] = callback;
            }

            socket.on('data', (_data) => {

                _data = JSON.parse(_data);

                const evname = _data.evemt,
                    data = _data.data;

                socket.handlers[evname](data);
            })

            resolve(socket);

        });

    })

}