const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname+"/public/index.html"));
});

app.get("/chat", function(req, res) {
    res.sendFile(path.join(__dirname+"/public/chat.html"));
});

app.listen(port, function(){
    console.log(`Server running on https://localhost:${port}`);
});
