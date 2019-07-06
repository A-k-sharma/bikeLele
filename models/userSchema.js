const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: 'https://i.ibb.co/dLGddDP/download.jpg'
    },
    licence: {
        type: String,
        required: true,
        default: ''
    },
    idProof: {
        type: String,
        required: true,
        default: ''
    },
});


module.exports = mongoose.model('userModel',userSchema);