var express = require('express');
 
var app=express();
 
app.get('/',function(req,res){
        res.send('首页update');
})
app.get('/news',function(req,res){
        res.send('首页');
})
 
//docker做端口映射的时候不要指定ip
app.listen(3000);