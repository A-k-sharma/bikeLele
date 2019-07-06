const express = require('express');
const routes = express.Router();
const userDetailsController = require('../controller/userDetailsController');




routes.post('/',userDetailsController.saveDetails);

routes.get('/',userDetailsController.fetchDetails);

routes.patch('/',userDetailsController.updateDetails);