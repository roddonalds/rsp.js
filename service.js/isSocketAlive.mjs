
Service.prototype.isSocketAlive = function (socket) {
    // Implement your own logic to determine if the socket is alive.
    // One common way is to check if the socket is still writable.
    return !socket.destroyed && socket.writable;
};

