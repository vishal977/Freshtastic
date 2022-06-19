const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const productRoutes = require('./routes/products')

//Express application config
const server = express()
server.use(express.json())
server.use(cors())

/* Logging incoming traffic */
server.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

/* ROUTERS */
server.use('/products', productRoutes)

/* CONNECTING TO DATABASE THEN STARTING SERVER */
mongoose.connect(process.env.DB_URI)
    .then(() => {
        /* Setting up server port */
        const port = process.env.SERVER_PORT
        server.listen(port, () => {
            console.log(`Connected to the database. Server is now running on port: ${port}`)
        })
    }).catch((err) => {
        console.log(`Database connection failed! ${err}`)
    })


