const express = require('express')
const { Router } = require('express')
const { controladoresApi } = require('../controllers/controladoresApi')

const routerApiProd = new Router()

routerApiProd.use(express.json())
routerApiProd.use(express.urlencoded({ extended: true}))

routerApiProd.get('/api/productos', controladoresApi.productos)
routerApiProd.get('/api/productos/:idProducto', controladoresApi.getProducto)
routerApiProd.post('/api/productos', controladoresApi.postProducto)
routerApiProd.put('/api/productos/:idProducto', controladoresApi.putProducto)
routerApiProd.delete('/api/productos/:idProducto', controladoresApi.deleteProducto)

module.exports = {routerApiProd}