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
productsRouter.delete('/:productCode', (req, res) => {
   Product.deleteOne({ productCode: req.params.productCode })
    .then(resp => res.json(`Deleted ${resp.deletedCount} product(s)`))
    .catch(err => res.status(400).json(err))
})

/* Update a product*/
productsRouter.patch('/:productCode', (req, res) => {
    Product.findOneAndUpdate({ productCode: req.params.productCode }, req.body)
        .then(resp => res.json(`Product updated successfully!`))
        .catch(err => res.status(400).json(err))
})


module.exports = productsRouter
