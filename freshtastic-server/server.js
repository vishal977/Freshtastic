const express = require('express')
require('dotenv').config()

//Express application
const server = express()

/* Logging incoming traffic */
server.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

/* Plain GET request */
server.get('/', (req, res) => {
    res.json({message: 'Hello from the other side!'})
})

/* Setting up server port */
const port = process.env.SERVER_PORT
server.listen(port, () => {
    console.log(`Server started. Running on port: ${port}`)
})