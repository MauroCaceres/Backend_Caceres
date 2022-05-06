const express = require('express')
const { controladoresApi } = require('./controllers/controladoresApi.js')
const { controladoresWeb } = require('./controllers/controladoresWeb.js')

const app = express()

app.get('/', controladoresWeb.root)
app.get('/productos', controladoresApi.productos)
app.get('/productoRandom', controladoresApi.productoRandom)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error.message) })