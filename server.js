const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("port", (process.env.PORT || 3000));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/index.html"));
});

app.listen(app.get("port"), function(){
    console.log(`Server started on port ${app.get("port")}`)
});