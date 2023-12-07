const mongoose = require('mongoose')
const CartSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        // unique:true
    },
    title:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,

    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },rating:{
       rate:{
        type:Number,
        required:true
       },
       count:{
        type:Number,
        required:true
       }
    },
    quantity:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },userId:{
        type:String,
        required:true
    }

})
const carts = mongoose.model('carts',CartSchema)
module.exports=carts
   