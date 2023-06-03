global.io=require('socket.io')(http)

//middleware for authentication real time socket
require("../middleware/socket_auth")

//main file for incoming and outgoing events
require("./events/main.js");