/*var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send("hello");
}).listen(3000);*/



let exp = require ('express');
let app = exp();
app.get('/hello/who',function(req,res){
    res.send("hello who routing:");
});
app.all('/hello/who',function(req,res){
res.send('you just called post method at hello/who path');
});
app.listen(3000);
