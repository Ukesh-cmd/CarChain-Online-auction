const express = require('express');

const app = require('express')();
const http = require('http').Server(app);
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/auction');

app.set('view engine', 'ejs');
app.set('views', './views')

const userRoute = require('./routes/userRoutes');
const adminRoute = require('./routes/adminRoutes')
app.use('/', userRoute, adminRoute);

http.listen(4000, ()=>{
    console.log('Router is running on port 4000');
})