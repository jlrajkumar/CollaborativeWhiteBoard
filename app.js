const express = require("express");
const app = express();
const http =require("http").Server(app); // from express package
const io = require("socket.io")(http);  //bounds to http server

const port = process.env.PORT || 3000;


app.use("/", express.static(__dirname + "/public") );


// Socket connection and emit data on drawing channel
const onConnection = socket => {
socket.on("drawing", data =>socket.broadcast.emit("drawing",data));
};
//when connection event happens , call onConnection listener
io.on("connection", onConnection )

http.listen(port, () => {
 console.log("Listening at port " + port + " and server started.");

}  );

io.on('connection', (socket) => 
{
    socket.on('drawing', (coordinates) => {
        console.log(coordinates);
        io.emit('draw', coordinates);
    })

    // socket.on('state', (state) => {
    //     console.log(state)
    // });
});

//leader election to save and allow access to new users
io.on('connection',(socket)=>{
    //when new users join store them in an array

users.push(socket.id)

//leader selection from array of users
leader = users[0];
socket.emit('leader',leader);

//when leader dropsout in between the session, then choose another leader
socket.on('disconnect',()=>{
    var ind= users.indexOf(socket.id);
    if (ind !== -1)
    {
droppedSocket = users.splice(index,1);
         if (droppedSocket == leader)
            {
                    leader = users[0];
              }

    }
});
