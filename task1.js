var express= require('express');
var app = express();
app.get('/',function (req,res) {
    res.send ('My name is Kavya Surendran');
})
var server=app.listen(8000,()=>{
var host=server.address().host
var port =server.address().port
console.log("this app listening at http://%s%s",host,port)
})