const {databaseProductos} = require("../databases/databaseProductos.js")

const controladoresApi = {
  
      productos: (req, res) => {
          res.json(databaseProductos.getAll())
      },
      productoRandom: (req, res) => {
          res.json(databaseProductos.getRandom())
      }
}

module.exports =  {controladoresApi}
