//File containing all incoming events listeners

const ServerResponse = require("../outgoing/index")
module.exports = {
    handleIncomingEvents: (socket) => {
        joinEvent(socket)
        message(socket)
    }
}
function joinEvent(socket) {
    socket.on("join", (data) => {
        socket.join(data)
        ServerResponse.room_joined(socket)
        
    })
}
function message(socket) {
    socket.on("message", (data) => {
        socket.to(data).emit("message",`hi ${socket.client.data} this side`);
        
    })
}