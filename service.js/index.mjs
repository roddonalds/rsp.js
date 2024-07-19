import { Worker } from 'worker_threads';
import { EventEmitter } from 'events';

import connect from './connect.mjs';
import functionn from './function.mjs'
import initialize from './initialize.mjs';

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

    this.works = {};
    this.functions = {};
    this.connections = [];
    this.events = [];
}

Service.prototype.work = function (_work) {

    console.warn('Adding work:', _work);

    if (!_work.id) {
        throw new Error('Worker must have an id');
    }

    if (!_work.name) {
        throw new Error('Worker must have an name');
    }

    console.warn('Creating work.script:', _work.script);

    let __work = new Worker(_work.script, {
        workerData: _work.data
    });

    let work = {
        id: _work.name,
        name: _work.name,
        script: __work.script,
        instance: __work,
        service: this.name
    };
 
    //this.works[work.name] = work;

    //console.debug('this.works[work.name]:', this.works[work.name]);
    //console.debug('Worker created:', work);
    //console.debug('Worker instance:', work.instance);

    work.instance.on('message', (message) => {
  
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


Service.prototype.checkAppClientIsAllowed = function (client) {
    return this.allowedClientApps.includes(client);
} 

Service.connect = connect;
Service.prototype.function = functionn;
Service.prototype.initialize = initialize;

export default Service;