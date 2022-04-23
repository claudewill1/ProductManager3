const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title:{type:String,required:[true,'item title must be included']},
    price:{type:Number,required:[true,'Price is required']},
    description:{type:String,required:[true,'description must be included']}
},{timestamps:true});

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;