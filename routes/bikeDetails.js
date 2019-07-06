const express = require('express');
const route = express.Router();
const bikeDetailsController = require('../controller/bikeDetailsController');

//routes for saving bike records
route.post( '/', bikeDetailsController.saveData);

//routes for getting bike data
route.get( '/', bikeDetailsController.fetchData);

//routes for updating details of bike
route.patch('/',bikeDetailsController.updateDetails);


module.exports = route;