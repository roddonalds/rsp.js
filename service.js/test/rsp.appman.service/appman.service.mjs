import path from 'path';
import Service from '../../index.mjs';

const appmanService = new Service({ 
    name: 'rsp.appman.service',
    allow: ['rsp.appman']
})

appmanService.work({
    id: 'SystemAppFilesWatch',
    name: 'SystemAppFilesWatch',
    path: path.resolve('./SystemAppFilesWatch.mjs'),
    data: { event: 'system-app-file', directory: '/usr/share/applications' }
});

appmanService.work({
    id: 'UserAppFilesWatch',
    name: 'UserAppFilesWatch',
    path: path.resolve('./UserAppFilesWatch.mjs'),
    data: { event: 'user-app-file', directory: process.env.HOME + '/.local/share/applications' }
});

appmanService.initialize('8d20652b610ab4fc7e4ff2b5');
