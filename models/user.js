const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {type:Number,required:true},
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
    email:{
        type:String,
        required:[true,'Please Provide your Email'],
         match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'please provide valid email'
        ],
       
    },
    gender: {type:String,required:true},
    income: {type:String,required:true},
    city: {type:String,required:true},
    car: {type:String,required:true},
    quote:{type:String,required:true},
    phone_price: {type:String,required:true}
})


module.exports = mongoose.model("User",UserSchema);