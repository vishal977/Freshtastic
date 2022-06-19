const express = require('express')
let Product = require('../models/product.model')
const productsRouter = express.Router()

/* 
    BASE URL: /products
*/

/* List of all products */
productsRouter.get('/', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err))
})

/* Individual product details */
productsRouter.get('/:productId', (req, res) => {
    Product.findById(req.params.productId)
        .then((product) => {
            res.json(product)
        }).catch(err => res.status(400).json(err))
})

/* Create a new product*/
productsRouter.post('/addProduct', (req, res) => {
    const newProduct = new Product(req.body)
    newProduct.save()
        .then(() => res.json({ message: `New product added!` }))
        .catch((err) => res.status(400).json(err))
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
