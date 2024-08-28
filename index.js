const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productPouter = require('./routes/product.route');
// const bodyParser = require("body-parser")
const app = express()
const PORT = 3000;


app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productPouter)

mongoose.connect("mongodb+srv://admin:oO9UPNO8lWzK0Ili@nodecruddb.owogp.mongodb.net/CRUD?retryWrites=true&w=majority&appName=nodeCrudDB").then(()=>{
    console.log("Connected to database!")
}).catch(()=>{
    console.log("db connecting failed!")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})




app.get('/', function (req, res) {
  res.send('Hello World from server')
})




