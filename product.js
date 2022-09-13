const mongoose = require('mongoose');
const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    catageory:String
});

module.exports = mongoose.model('products',productSchema);