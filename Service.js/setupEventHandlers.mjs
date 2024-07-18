export default function () {

    console.warn('Setting up event handlers');

    this.connections.forEach(ev => {
        
        console.warn(`Setting up ${ev.event} handler`);

        this.on(ev.event, (data) => {

            console.log('data', data);
            console.log('ev.event', ev.event);
            console.log(`Event from ${data.filename}/${data.fillpath}`);

            poAKD0

        });
    });
}