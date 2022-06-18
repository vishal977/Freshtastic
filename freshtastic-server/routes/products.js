const express = require('express')

const productsRouter = express.Router()

/* 
    BASE URL: /products
*/

/* List of all products */
productsRouter.get('/', (req, res) => {
    res.json({ message: `Getting all products` })
})

/* Individual product details */
productsRouter.get('/:productId', (req, res) => {
    res.json({ message: `Get product by productId` })
})

/* Create a new product*/
productsRouter.post('/addProduct', (req, res) => {
    res.json({ message: `New product added!` })
})

/* Delete a product*/
productsRouter.delete('/:productId', (req, res) => {
    res.json({ message: `Product deleted` })
})

/* Update a product*/
productsRouter.patch('/:productId', (req, res) => {
    res.json({ message: `Product updated` })
})


module.exports = productsRouter
