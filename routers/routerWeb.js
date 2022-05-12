const { Router } = require('express')
const { controladoresWeb } = require('../controllers/controladoresWeb.js')

const routerWeb = new Router()

routerWeb.get('/', controladoresWeb.root)

module.exports = { routerWeb }