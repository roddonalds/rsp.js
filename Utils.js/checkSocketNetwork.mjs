// Utils.js/checkSocketNetwork.mjs

import fs from 'fs';
import shelljs from 'shelljs'

function checkSocketNetwork (domain, address) {
    
    const etcHostsPath = '/etc/hosts';
    
    let domainFound = false;
    let correctAddress = false;

    console.debug('domain', domain)
    console.debug('address', address)

    try {

        const etcHostsContent = fs.readFileSync(etcHostsPath, 'utf8');
        const lines = etcHostsContent.split('\n');

        lines.forEach((line) => {
            const parts = line.trim().split(/\s+/);
            if (parts.length >= 2 && parts[0] === address && parts[1] === domain) {
                domainFound = true;
                correctAddress = true;
            }
        });

    } catch (err) {
        console.error(`Error reading ${etcHostsPath}:`, err);
        process.exit(1);
    }

    if (!domainFound) {
        console.error(`Domain ${domain} not found in ${etcHostsPath}.`);
        console.error('Please set it up manually in /etc/hosts and try again.');
        process.exit(1);
    }

    if (!correctAddress) {
        console.error(`Domain ${domain} exists in ${etcHostsPath} but does not point to ${address}.`);
        console.error('Please correct /etc/hosts entry and try again.');
        process.exit(1);
    }

    console.warn('domain "', domain, '" pointing')
    console.warn('to the address "', address, '" found.')

    // Ping the domain to check reachability
    const pingCommand = `ping -c 1 ${domain}`;

    return new Promise((resolve, reject) => {

        shelljs.exec(pingCommand, (message, stdout, stderr) => {

            //console.debug(typeof message)
            //console.debug(typeof stdout)
            //console.debug(typeof stderr)

            //console.debug('message', message)
            //console.debug('stdout', stdout)
            //console.debug('stderr', stderr)

            if (stdout.includes('Name or service not known')) {
                console.error(`Cannot reach domain ${domain}.`);
                console.error('To setup manually, run:');
                console.error(`sudo ip address add dev lo ${address}`);
                reject(false)
            } else {
                console.log(`Domain ${domain} is reachable.`);
                console.log('Network setup is verified.');
                resolve(true)
            }
        });

    })

} 

export default checkSocketNetwork;