const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/models.products.js')
const productRoute = require('./routes/product.routes.js')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
app.use('/api/products', productRoute)

app.get('/', function (req, res) {
  res.send('response from Node API')
});


mongoose.connect("mongodb+srv://chandramoulirotta11:k0cksQ8Sd1B8XGnj@backenddb.ir7wz.mongodb.net/?retryWrites=true&w=majority&appName=backendDB")
.then(()=> {
  console.log("Conneted to DB")
  app.listen(3000, () => {
    console.log( `Server connected to port 3000`)
  })
}).catch(() => {
  console.log('connecton Failed')
})