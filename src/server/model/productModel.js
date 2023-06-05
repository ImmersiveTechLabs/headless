const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId:{
        type:String,
    },
    date:{
        type:Date,
    },
    quantity:{
        type:Number
    }

})
productSchema.index({ bookingDate: 1 }, { expireAfterSeconds: 60 });

module.exports = mongoose.model('Product', productSchema)
