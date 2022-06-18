const express = require('express')
require('dotenv').config()

//Express application
const server = express()

/* Setting up server port */
const port = process.env.SERVER_PORT
server.listen(port, () => {
    console.log(`Server started. Running on port: ${port}`)
})