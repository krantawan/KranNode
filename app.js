const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.send("Hello! KRANTAWAN")
})

app.get("/hello", function(req,res){
    res.send("Hello World!")
})

app.listen(process.env.PORT || 5000)
module.exports = app
