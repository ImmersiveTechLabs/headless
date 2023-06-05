const router = require('express').Router()
const productModel = require('../model/productModel')

router.post('/addbooking', async(req,res)=>{
    const product = await productModel.create({
        productId:req.body.productId,
        bookingDate:Date.now()
    })
    res.json(product)


})

router.get('/test/:productId',async (req,res)=>{
    const product = await productModel.find({
        productId:req.params.productId
    }).select("-productId -_id -__v")
    res.send(product)
})
module.exports = router
