const express=require('express');
const mysql=require('mysql');
const userRouter=require('./routes/user.js')
const bodyParser=require('body-parser')
var app=express();
app.listen(8080);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:false
}));