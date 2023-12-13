var actuatorRoutes = require('./../routes/actuators');
var sensorRoutes = require('./../routes/sensors');
const express = require('express'),
	cors = require('cors');
	
var app = express();
app.use(cors());
app.use('/pi/sensors', sensorRoutes);
app.use('/pi/actuators', actuatorRoutes);
app.get('/', function(req,res){
	res.send("base");
});

app.get('/pi', function(req,res){
	res.send("base, pi");
});



module.exports = app;


// I have read through all the files
