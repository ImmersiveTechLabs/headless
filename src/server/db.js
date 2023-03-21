const mongoose = require('mongoose')


const func =async ()=>{
    console.log('connecting db')
    await mongoose.connect('mongodb+srv://hkkhan112:popular123@cluster0.qysecyo.mongodb.net/immersivetest')
    console.log('db connected')
}
module.exports = func()
