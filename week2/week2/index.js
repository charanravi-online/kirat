

const fs = require("fs")
// var express = require('express')

// returning contents of a file test.txt
// function callBackFun(err, data){
//     console.log(data);
// }


// express js hello world
const express = require('express')
const app = express()
const port = 3000

function handleFirstReq(req, res){
    var num = req.query.num
    var calculatedSum = CalculateSum(num);
    var ans = "the calculated sum is "+ calculatedSum;
    res.send(ans)
}

function handleHelloReq(req, res){
    res.send("just here to say hello :')")
}

function handleLoginReq(req, res){
    res.send("are you trying to login? This isn't a real page lol...")
}

app.get('/', handleFirstReq)
app.get('/hello/', handleHelloReq)
app.get('/login/', handleLoginReq)

function started(){
  console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)


// function to read a file
// fs.readFile("test.txt","utf-8", callBackFun)
function CalculateSum(counter){
    var sum = 0;
    for(var i = 0; i<=counter; i ++){
        sum = sum + i;
    }
    return sum
}




