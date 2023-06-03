//File For emitting events to clients connected with connection

const serverResponse=new ServerResponse();
function ServerResponse(){
}
ServerResponse.prototype.room_joined=(socket)=>{
    socket.emit("ROOM_JOINED","Your connection successfull")
}
module.exports=serverResponse