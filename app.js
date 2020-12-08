const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req,res) =>{
res.json("Hey..!  Welcome to Collaborative White Board ")

}

);

app.listen(port, () => {
 console.log("Listening at port " + port + " and server started.");

}  );