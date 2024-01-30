const express = require('express')
const app = express()
const port = 3000

function handleFirstReq(req, res) {
    var num = req.query.num
    var calculatedSum = CalculateSum(num);
    var ans = "the calculated sum is " + calculatedSum;
    res.send(ans)
}

function handleHelloReq(req, res) {
    res.send("just here to say hello :')")
}

function handleLoginReq(req, res) {
    res.send("are you trying to login? This isn't a real page lol...")
}

// specifying routes with respective functions
app.post('/', handleFirstReq) //post handler
app.get('/hello/', handleHelloReq)
app.get('/login/', handleLoginReq)

function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)


function CalculateSum(counter) {
    var sum = 0;
    for (var i = 0; i <= counter; i++) {
        sum = sum + i;
    }
    return sum
}




