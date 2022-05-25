const express = require('express')
const { Router } = express.Router
const { routerWeb } = require('./routers/routerWeb')
const { routerApiProd } = require('./routers/routerApiProd')

const { engine } = require('express-handlebars')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

//                                                    EJS
//app.set('view engine', 'ejs')

//                                                    PUG
//app.set('view engine', 'pug')

app.set('views', './views')

app.use(routerWeb)
app.use(routerApiProd)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error.message) })