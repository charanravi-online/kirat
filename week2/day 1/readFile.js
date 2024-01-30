const fs = require("fs")

// function to read a file
function callBackFun(err, data) {
    console.log(data);
}

// specifying what file to read and function call
fs.readFile("test.txt", "utf-8", callBackFun)