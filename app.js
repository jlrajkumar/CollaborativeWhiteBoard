const express = require("express");
const app = express();
const http =require("http").Server(app); // from express package
const io = require("socket.io")(http);  //bounds to http server

const port = process.env.PORT || 3000;


app.use("/", express.static(__dirname + "/public") );

http.listen(port, () => {
 console.log("Listening at port " + port + " and server started.");

}  );