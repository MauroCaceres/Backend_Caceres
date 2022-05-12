const express = require('express')
const { Router } = express.Router
const { routerWeb } = require('./routers/routerWeb')
const { routerApiProd } = require('./routers/routerApiProd')

const app = express()

app.use(routerWeb)
app.use(routerApiProd)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error.message) })