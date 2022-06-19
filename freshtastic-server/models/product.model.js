const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    productCode: { type:String, required: true, unique: true },
    productName: { type:String, required: true },
    description: { type:String, required: true },
    price: { type:Number, required: true },
    discount: { type:Number, required: true }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product