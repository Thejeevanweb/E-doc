var express = require("express");
var bodyparser = require("body-parser");
var cookie = require("cookie-parser");
var multer = require("multer");

var mongoose = require("mongoose");
//fgfdgfd


var app = express();

// mongodb cha data pass kela ahe 

mongoose.connect("mongodb://localhost:27017/e-doc-node");
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.on("open", () => console.log("connection successfull"));




app.use(bodyparser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});


app.use("/authentication", require("./routes/authentication"));
app.use("/documents", require("./routes/documents"));
app.use("/words", require("./routes/words"));
app.use("/employees", require("./routes/employees"));

app.listen(8081, function() {
    console.log("Edoc project");
});


app.get("/", function(req, res) {
    res.send("welcome to iGap")

})