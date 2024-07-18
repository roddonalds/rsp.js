function cli(interfaceName, secondArgument, thirArgument) {

    console.debug('cli function called with arguments:', { interfaceName, secondArgument, thirArgument });

    if (!interfaceName) {
        console.debug('No interfaceName provided, calling getAllInterfaces()');
        getAllInterfaces();
        return;
    }

    let iface = global.rsp.desktopSocket.interfaces[interfaceName];
    
    console.debug('Fetched interface:', iface);

    if (!iface) {
        console.error(`Interface ${interfaceName} not found`);
        throw new Error(`Interface ${interfaceName} not found`);
    }

    if (!secondArgument) {
        console.debug('No secondArgument provided, returning interface:', iface);
        console.log(iface);
        return iface;
    }

    if (secondArgument) {
        if (!thirArgument) {
            console.error('Third argument not defined');
            return;
        }

        console.debug('Second argument is provided:', secondArgument);

        if (secondArgument === 'job') {
            console.debug('Handling job:', thirArgument);
            handleJob(iface, thirArgument);
        } else if (secondArgument === 'signal') {
            console.debug('Handling signal:', thirArgument);
            handleSignal(iface, thirArgument);
        } else if (secondArgument === 'method') {
            console.debug('Handling method:', thirArgument);
            handleMethod(iface, thirArgument);
        } else {
            console.error('Invalid second argument:', secondArgument);
            console.log('Must be one of: job, signal, method');
        }
    }
}

function handleJob(iface, jobName) {
    console.debug('handleJob function called with arguments:', { iface, jobName });

    if (!jobName) {
        console.error(`Job name not provided`);
        throw new Error(`Job ${jobName} not found`);
    }

    if (!iface.jobs[jobName]) {
        console.error(`Job ${jobName} not found in interface`, iface.jobs);
        throw new Error(`Job ${jobName} not found`);
    }

    console.debug('Returning job:', iface.jobs[jobName]);
    return iface.jobs[jobName];
}

function handleSignal(iface, signalName) {
    console.debug('handleSignal function called with arguments:', { iface, signalName });

    if (!signalName) {
        console.error(`Signal name not provided`);
        throw new Error(`Signal ${signalName} not found`);
    }

    if (!iface.signals[signalName]) {
        console.error(`Signal ${signalName} not found in interface`, iface.signals);
        throw new Error(`Signal ${signalName} not found`);
    }

    console.debug('Returning signal:', iface.signals[signalName]);
    return iface.signals[signalName];
}

function handleMethod(iface, methodName) {
    console.debug('handleMethod function called with arguments:', { iface, methodName });

    if (!methodName) {
        console.error(`Method name not provided`);
        throw new Error(`Method ${methodName} not found`);
    }

    if (!iface.methods[methodName]) {
        console.error(`Method ${methodName} not found in interface`, iface.methods);
        throw new Error(`Method ${methodName} not found`);
    }

    console.debug('Returning method:', iface.methods[methodName]);
    return iface.methods[methodName];
}

function getAllInterfaces() {

    console.debug('getAllInterfaces function called');

    let interfaces = global.rsp.desktopSocket.interfaces;

    console.debug('Fetched all interfaces:', interfaces);

    let interfacesNames = Object.keys(interfaces);

    console.debug('Interface names:', interfacesNames);

    if (interfacesNames.length === 0) {
        console.error('No interfaces found');
        return;
    } else {
    
        interfacesNames.forEach((interfaceName) => {
            console.debug('Looping for print interface name:', interfaceName);
            console.log(interfaceName);
        });

        return interfaces || []
    }

}

module.exports = {
    cli,
    handleJob,
    handleSignal,
    handleMethod,
    getAllInterfaces
};
