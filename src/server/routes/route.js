const router = require('express').Router()
const productModel = require('../model/productModel')

router.post('/addbooking', async(req,res)=>{
    const product = await productModel.create({
        productId:req.body.productId,
        bookingDate:Date.now()
    })
    res.json(product)


})


router.get('/check/:productId/:bookingDate', async(req,res)=>{
    const {productId, bookingDate} = req.params
    try{
        const product = await productModel.find({
            $and:[
                {productId},
                {bookingDate},
            ]

        })
        if(!product)return res.status(500).json('not found')
        res.json(product)


    }catch(err){
        res.status(500).json(err)
    }



})



module.exports = router
