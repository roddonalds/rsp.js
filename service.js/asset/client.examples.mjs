
// socket.receive('app-file-create', data => {
//     console.warn('event received', 'app-file-create');
//     console.log('data.fillpath', data.fillpath);
//     console.log('data.filename', data.filename);
// })

// socket.receive('app-file-delete', data => {
//     console.warn('event received', 'app-file-delete');
//     console.log('data.fillpath', data.fillpath);
//     console.log('data.filename', data.filename);
// })

////////////////////////////////////////////////////
// custom functions (defined on the server instance)
////////////////////////////////////////////////////

// socket.run('search-apt-packages', 'openjdk', packages => {
//     console.warn('function calls', 'search-apt-package');
//     console.log('packages', packages);
// })

////////////////////////////////////////////////////////////
// native functions (preset on every socket instance)

////////////////////////////////////////////////////////////

// socket.run('list-service-works', works => {
//     console.warn('functionfunction calls', 'list-service-works');
//     console.log('works', works);
// })


// service.on('app-file-change', (data) => {
//     console.warn('app-file-change event:', data);
//     console.log(`Event from ${data.namespace}/${data.workId}: ${data.message}`);
// })

// socket('8d20652b610ab4fc7e4ff2b5' , socket => {
    
//     console.log(`Socket of rsp.appman connected: to rsp.appman.service socket`);

//     service.event('desktop-file-change', (data) => {
//         console.warn('desktop-file-change event:', data);
//         console.log(`Event from ${data.namespace}/${data.workId}: ${data.message}`);
//     })
    
// })

// appmanService.on('desktop-file-change', (data) => {
//     console.warn('desktop-file-change event:', data);
//     console.log(`Event from ${data.namespace}/${data.workId}: ${data.message}`);
// })


// setTimeout(() => {
//     appmanService.write(JSON.stringify({
//         type: 'event',
//         event: 'fodeu',
//         socket: appmanService
//     }))
// }, 1000);

// Listen for work events within the 'rsp.appman.service' namespace
//appmanService.on('desktop-file-change', (data) => {
  //  console.warn('desktop-file-change event:', data);
    //console.log(`Event from ${data.namespace}/${data.workId}: ${data.message}`);
//});

// Call a method on a work within the 'rsp.appman.service' namespace
//appmanService.execute('WorkerFileWatcher', 'someMethod', arg1, arg2)
//  .then(result => {
//    console.log(result); // Output: Method result
// })
// .catch(error => {
//     console.error(error.message);
// });


// Close the connection when done
// appmanService.close();
