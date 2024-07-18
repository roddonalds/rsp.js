export default (obj) => {

    if (obj.constructor.name === 'Socket') {
        return obj.toString();
    }
    
    if (obj.client) {
        return {
            client: obj.client,
            socket: obj.socket ? obj.socket.toString() : null,
            secret: obj.segredo,
            service: obj.service
        }
    }

    return Object.keys(obj).map(key => {
        return {
            client: obj[key].client,
            socket: obj[key].socket ? obj[key].socket.toString() : null,
            secret: obj[key].segredo,
            service: obj[key].service
        }
    });
};