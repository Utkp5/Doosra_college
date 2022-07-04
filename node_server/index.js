// M = Mongo // E = Express // R = React // N = Node //
const express = require("express");
const app = express();
const PORT = 4000;

// app.get("/", function (req, res) {
//     return res.send("Hello Utkarsh!");
//   });

app.get("/home", function (req, res) {
    return res.send("Hello Utkarsh!");
  });

app.listen(PORT, function (error) {
  if (error) {
    console.log("Error in starting rhe server");
  }
  console.log(`Server started successfully on port : ${PORT}`)
//   console.log("Server started successfully");
});