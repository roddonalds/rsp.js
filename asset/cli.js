#!/usr/bin/env node

const { program } = require('commander');
const { cli, handleJob, handleSignal, handleMethod, getAllInterfaces } = require('./ManagerAPI.js');

if (!process.argv.slice(2).length) {
  getAllInterfaces();
}

program
  .version('1.0.0')
  .description('CLI for interfacing with the desktopSocket API');

// Command to handle interface with optional second and third arguments
program
  .command('interface <interfaceName> [secondArgument] [thirdArgument]')
  .description('Handle an interface with optional second and third arguments')
  .action((interfaceName, secondArgument, thirdArgument) => {
    try {
      cli(interfaceName, secondArgument, thirdArgument);
    } catch (error) {
      console.error(error.message);
    }
  });

// Command to get all interfaces
program
  .command('getAllInterfaces')
  .description('Get all interfaces')
  .action(() => {
    try {
      getAllInterfaces();
    } catch (error) {
      console.error(error.message);
    }
  });

// Command to handle a job within an interface
program
  .command('job <interfaceName> <jobName>')
  .description('Handle a job within an interface')
  .action((interfaceName, jobName) => {
    try {
      const iface = cli(interfaceName);
      handleJob(iface, jobName);
    } catch (error) {
      console.error(error.message);
    }
  });

// Command to handle a signal within an interface
program
  .command('signal <interfaceName> <signalName>')
  .description('Handle a signal within an interface')
  .action((interfaceName, signalName) => {
    try {
      const iface = cli(interfaceName);
      handleSignal(iface, signalName);
    } catch (error) {
      console.error(error.message);
    }
  });

// Command to handle a method within an interface
program
  .command('method <interfaceName> <methodName>')
  .description('Handle a method within an interface')
  .action((interfaceName, methodName) => {
    try {
      const iface = cli(interfaceName);
      handleMethod(iface, methodName);
    } catch (error) {
      console.error(error.message);
    }
  });

program.parse(process.argv);