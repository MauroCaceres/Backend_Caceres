const express = require('express')
const routerWeb = express.Router()

routerWeb.use(express.urlencoded({ extended: true }))

const productos = [
    {nombre: 'Escuadra', precio: '123.45', foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'},
    {nombre: 'Calculadora', precio: '234.56', foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'},
    {nombre: 'Globo Terráqueo', precio: '345.67', foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'}
]

routerWeb.get('/', (req, res) => {
    res.render('inicio', { productos });
});

routerWeb.post('/productos', (req, res) => {
    productos.push(req.body)
    console.log(productos)
    res.redirect('/')
});

routerWeb.get('/productos', (req, res) => {
    const datos = {
        productos,
        hayProductos: Boolean(productos.length > 0),
    }
    res.render('productos', datos );
});

module.exports = { routerWeb }