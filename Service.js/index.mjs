import { EventEmitter } from 'events';
import { Worker } from 'worker_threads';

import connect from './connect.mjs';
import functionn from './function.mjs'
import initialize from './initialize.mjs';
import setupEventHandlers from './setupEventHandlers.mjs';

import { socketObjectParse } from '../Utils.js/index.mjs';

function Service (options) {

    if (!options) {
        throw new Error('Options are required');
    }

    if (!options.name) {
        throw new Error('Service name is required');
    }

    if (options.allow) {
        this.allowedClientApps = options.allow;
    }

    // most important properties
    this.port = 8080;
    this.address = '127.0.0.1';

    this.name = options.name;
    this.segredo = options.segredo;

    this.emiter = new EventEmitter();
    this.on = this.emiter.on;
    this.emit = this.emiter.emit;

    this.workers = {};
    this.functions = {};
    this.connections = [];
    this.events = [];
}

//Service.prototype = Object.create(EventEmitter.prototype);
//Service.prototype.constructor = Service;

Service.prototype.worker = function (_worker) {

    console.debug('Adding worker:', _worker);

    if (!_worker.id) {
        throw new Error('Worker must have an id');
    }

    console.debug('Creating worker:', _worker);

    let __worker = new Worker(_worker.work, {
        workerData: _worker.data
    });

    let worker = {
        id: _worker.id,
        work: _worker.work,
        instance: __worker,
        service: this.serviceName
    };

    this.workers[worker.id] = worker;

    worker.instance.on('message', (message) => {

        let event = message.event,
              data = message.data;

        console.debug('Worker event:', event);
        console.debug('Worker data:', data);

        this.connections.forEach(con => {
            data.event = event;
            con.socket.write(JSON.stringify(data));
        })

    });
};

Service.prototype.event = function (event, description) {
    
    console.debug('Registering event:', event);
    console.debug('Event description:', description);

    this.on(event, (data) => {
        
        // console.warn('Worker event received', event)
        // console.warn(description)
        // console.debug('data', data)

        // this.connections.forEach(con => {
        //     console.log('this.connections.forEach(con')
        //     //console.debug('con', con)
        //     //console.debug('con.socket', con.socket)
        //     //con.socket.emit('message', 'trembala')((

        //     console.log(con.socket)
        // })
    })

    this.events.push({
        event,
        description
    });
}

Service.prototype.checkAppClientIsAllowed = function (client) {
    return this.allowedClientApps.includes(client);
} 

Service.connect = connect;
Service.prototype.function = functionn;
Service.prototype.initialize = initialize;
Service.prototype.setupEventHandlers = setupEventHandlers;

export default Service;