const mongoose = require('mongoose');
const schema = mongoose.Schema;

//creating schema for post
let cartSchema = new schema({

    userEmail: {
        type: String,
        required: true
    },
    cartItems: [
        {
            bikeDetails:{
                bikeId: {
                    type: String,
                    required: true
                },
                bikeImage: {
                    type: String,
                    required: true
                },
                bikeRate: {
                    type: Number,
                    required: true
                }
                // rest
            }
        }
    ],
    cartTotal: {
        type: String,
        required: true
    },
    //rest
});

module.exports = mongoose.model('bikeDetails',bikeSchema);