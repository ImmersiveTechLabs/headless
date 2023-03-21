const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    bookingDate:{
        type:Date,
        required:true,
        index: { expires: '1m' } // Expire using MongoDB TTL index
    }
})
productSchema.index({ bookingDate: 1 }, { expireAfterSeconds: 60 });

module.exports = mongoose.model('Product', productSchema)
