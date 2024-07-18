# RSP.js (@rspos Node.js API)

RSP.js is a lightweight JavaScript library designed to integrate with @rsp Operational System
A debian distro without systemd. It uses electron.js + X11 for Desktop Environment composing.
It abstract the Linux patterns to Node.js API, commands and services.

For example, you can manage the Desktop Apps by connect an Electron.js application to a system's service socket by API.
That mean's, hear to package manager events, .desktop files, presented on a Set/Array
Call service functions by socket for installing, removing packages, etc.
Simplify the creation and management of ServiceSocket instances for server-client communication using TCP. 
It provides a robust framework for handling events, managing workers, and facilitating seamless interactions between clients and servers.

## Features

- ServiceSocket Management: Easily create and manage ServiceSocket instances.
- Worker and Client Communication: Efficiently handle worker and client interactions through TCP.
- Event Broadcasting: Broadcast events from workers to all connected clients.
- Dynamic Routing: Supports dynamic routing of ServiceSocket instances without specifying address/port for each instance.
- Installation of services and IPC facilited by clear .js API.
- Integration with electron.js apps and electro-packager.

# To install RSP.js, use npm:

(Alpha version of the OS is under development about to release).