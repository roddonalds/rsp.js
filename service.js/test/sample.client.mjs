import Service from '../index.mjs'

// Connect to the 'rsp.appman.service' namespace on the server
Service.connect({
    
    client: 'rsp.appman', 
    service: 'rsp.appman.service',
    segredo: '8d20652b610ab4fc7e4ff2b5'

}).then(socket => {

    console.warn('Service Socket connected:', socket);

    socket.receive('system-app-file-change', data => {
        console.log('data.fillpath', data.fillpath);
        console.log('data.filename', data.filename);
    })

    socket.receive('user-app-file-change', data => {
        console.log('data.fillpath', data.fillpath);
        console.log('data.filename', data.filename);
    })

});
