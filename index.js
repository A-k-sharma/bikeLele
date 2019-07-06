const express = require( 'express' );
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bikeDetails = require('./routes/bikeDetails');


// creating port constant
const PORT = 8080;


const app = express();

mongoose.connect(`mongodb://localhost/bike-lele`,()=>{
    console.log("Database is connected");
});

app.use( (req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use( '/bike-details', bikeDetails);


app.listen(PORT, ()=> console.log("App is running on http://localhost:"+PORT));