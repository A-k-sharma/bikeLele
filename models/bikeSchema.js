const mongoose = require('mongoose');
const schema = mongoose.Schema;

//creating schema for post
let bikeSchema = new schema({

    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    topSpeed: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('bikeDetails',bikeSchema);