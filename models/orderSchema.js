const mongoose = require('mongoose');
const schema = mongoose.Schema;

const orderSchema = new schema({
    userEmail: {
        type: String,
        required: true
    },
    orderItems: [
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
    orderTotal:{
        type: Number,
        required: true
    },


})