global.express=require("express")
global.app=express();
global.PORT=3000;
global.http=require("http").Server(app)
require("./sockets/index.js")

http.listen(PORT,(err)=>{
    if(!err){
        console.log(`Listneing at ${PORT}`);
    }
})