


const bikeSchema = require('../models/bikeSchema');

module.exports = {
    saveData: (req, res)=>{
        const newBike = new bikeSchema({
            name: req.body.name,
            color: req.body.color,
            topSpeed: req.body.topSpeed,
            rate: req.body.rate,
            quantity: req.body.quantity
        });
        newBike.save()
            .then((response)=>{
                console.log("Data--->",response);
                res.send(response);
            })
            .catch((err)=>{
                console.log("Error--->",err);
            })
    },
    fetchData: async (req,res)=>{
        bikeSchema.find({})
            .then((response)=>{
                console.log("Bike Details:\n",response);
                res.send(response);
            })
            .catch((err)=>{
                console.log("Error--->",err);
            })
    },
    updateDetails: async (req,res)=>{

    }
};