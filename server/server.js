//server.js
'use strict'
import express from 'express';
import dotenv from 'dotenv';
require('dotenv').config();
import mongoose from 'mongoose';
import Q from 'q';
import request from 'request';
import bodyParser from 'body-parser';
import listData from './model/listModel';

const app = express();
const router = express.Router();
const path = require('path');

const staticFiles = express.static(path.join(__dirname, '../../client/build'));
app.use(staticFiles);

//set our port to either Heroku port number (prod) or 3001 (dev)
app.set('port', (process.env.PORT || 3001));

console.log("process.env.PORT", process.env.PORT);

const promise = mongoose.connect(
  (process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : process.env.REACT_APP_DBURI),
  function(error) {
    if(error)
      console.log(error);
      console.log("DB connection successful");
  }
);

//configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//allow CORS:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');


//remove cacheing so we get the most recent comments - is this OK?
 res.setHeader('Cache-Control', 'no-cache');
 if ('OPTIONS' == req.method) {
   res.sendStatus(200);
 } else {
   next();
 }
});

//set the route path & initialize the API
router.get('/', function(req, res) {
	res.json({ message: 'API Initialized!'});
 });

 //list data
 router.route('/list')
 // GET route
	.get(function(req, res) {
		let query = {};
		listData.find(query).exec(function(err, listdata) {
			if (err)
			res.send(err);
			res.json(listdata)
		});
	})
// POST route
	.post(function (req, res) {
		var newItem = new listData(req.body);
		newItem.save()
			.then(() => {
				listData.find().exec(function(err, listdata) {
					if (err)
					res.send(err);
					res.json(listdata)
				})
			})
		;
	});


router.route('/completeItem')
// POST route
	.post(function (req, res) {
		console.log("complete ID: ", req.body);
		listData.findByIdAndUpdate(req.body.id,{ cplt: true })
			.then(() => {
				listData.find().exec(function(err, listdata) {
					if (err)
					res.send(err);
					res.json(listdata)
				})
			})
		;
	});

router.route('/deleteItem')
// POST route
	.post(function (req, res) {
		console.log("req.body: ", req.body);
		listData.findByIdAndRemove(req.body.id)
			.then(() => {
				listData.find().exec(function(err, listdata) {
					if (err)
					res.send(err);
					res.json(listdata)
				})
			})
		;
	});

router.route('/listSingle')
// POST route
	.post(function (req, res) {
		console.log("listSingle ID: ", req.body);
		listData.findById(req.body.id).exec(function(err, listdata) {
					if (err)
					res.send(err);
					res.json(listdata)
		})
	});

router.route('/completeItemEdit')
// POST route
	.post(function (req, res) {
		console.log("completeItemEdit ID: ", req.body);
		listData.findByIdAndUpdate(req.body.id,{ cplt: true })
			.then(() => {
				listData.findById(req.body.id).exec(function(err, listdata) {
					if (err)
					res.send(err);
					res.json(listdata)
				})
			})
		;
	});

router.route('/saveItemEdit')
// POST route
.post(function (req, res) {
	console.log("saveItemEdit: ", req.body);
	listData.findByIdAndUpdate(req.body.id,{ 
		title: req.body.title,
		description: req.body.description,
		cplt: req.body.cplt
	 })
			.then(() => {
				listData.findById(req.body.id).exec(function(err, listdata) {
					if (err)
					res.send(err);
					res.json(listdata)
				})
			})
		;
});

//Use our router configuration when we call /api
app.use('/api', router);

// trying to resolve Cannot /GET - per SO issue - https://stackoverflow.com/questions/44723509/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

//starts the server and listens for requests
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
