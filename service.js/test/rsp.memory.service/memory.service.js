const { Worker } = require('work_threads');

import Service from '../../index.js';

// Create an instance of Service with namespace 'memory.service'
const memoryService = new Service('memory.service');

// Create works and add them to the memoryService
const RamUsageWatcher = new Worker('RamUsageWatch');
const SwapUsageWatcher = new Worker('SwapUsageWatch');

memoryService.work(RamUsageWatcher);
memoryService.work(SwapUsageWatcher);

// Listen for work events within the namespace
memoryService.on('SwapOverload', (data) => {
    console.log(`Event from ${data.namespace}/${data.workId}: ${data.message}`);
});

memoryService.on('RamOverload', (data) => {
    console.log(`Event from ${data.namespace}/${data.workId}: ${data.message}`);
});

// Since the server is already running on predefined port/address (127.0.0.1:8080),
// there's no need to specify it again when creating the memoryService.

// Simulate doing work
RamUsageWatcher.doWork();
SwapUsageWatcher.doWork();
