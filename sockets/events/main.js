const { handleIncomingEvents } = require("./incoming/index.js")
io.on("connection",(socket)=>{
    console.log("New Connection")
    handleIncomingEvents(socket)
})
function globalError(socket,message){
    socket.emit("global_error",message)
}