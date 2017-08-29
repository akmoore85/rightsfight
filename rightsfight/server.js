'use strict'

var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 1337;


app.use('api', require('./api/routes/forumRoutes'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port);
