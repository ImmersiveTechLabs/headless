const express = require('express')
const app  = express()
require('./db')
const productRoute = require('./routes/route')
const cors = require('cors')



//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/product', productRoute)
const port = 4000
app.listen(port, ()=>{
console.log('server started on port ' + port)
})
