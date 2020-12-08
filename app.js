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