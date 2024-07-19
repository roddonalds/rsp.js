import fs from 'fs';
import { parentPort, workerData } from 'worker_threads';

const initialize = () => {

    console.warn('Initializing "SystemAppFilesWatch.mjs" work');

    const event = workerData.event,
          directory = workerData.directory;
        
    fs.watch(directory, (eventType, filename) => {
        parentPort.postMessage({
            event: `${event}-${eventType}`,
            data: { filename, fillpath: `${directory}/${filename}`}
        });
    });
}

initialize();
