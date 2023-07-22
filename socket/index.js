const{ Server}=require("socket.io")

const io=new Server({cors:"http://localhost:3000"});

// let onlineUsers=[]

io.on("connection",(socket)=>{
    console.log("new connection",socket.id);

    //listen to connection
    // socket.on("addNewUser",(userId)=>{
    //     onlineUsers.some(user=>user.userId===userId)
    //     onlineUsers.push({
    //         userId,
    //         socketId:socket.id
    //     })
    // })
    socket.on('message',(message)=>{

        io.emit("message",message)
    })
    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);
    })

})
io.listen(8080)