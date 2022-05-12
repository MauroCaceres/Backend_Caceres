const {databaseProductos} = require("../databases/databaseProductos.js")

const controladoresApi = {
    productos: (req, res) => {
        res.json(databaseProductos.getAll())
    },
    getProducto: (req, res) => {
    const id = req.params.idProducto
        try {
            const productoBuscado = databaseProductos.obtenerSegunId(id);
            res.json(productoBuscado)
        } catch (error) {
            if (error.tipo === 'db not found') {
                res.status(404).json({ error: error.message })} 
            else {
                res.status(500).json({ error: error.message })
            }
        }
    },
    postProducto: (req, res) => {
        const productoAgregado = databaseProductos.agregarProducto(req.body)
        res.status(201).json(productoAgregado)
    },
    putProducto: (req, res) => {
        const id = req.params.idProducto
        const datos = req.body
        try {
            const productoReemplazado = databaseProductos.replaceProdById(id, datos)
            res.json(productoReemplazado)} 
        catch (error) {
            if (error.tipo === 'db not found') {
                res.status(404).json({ error: error.message })} 
            else {
                res.status(500).json({ error: error.message })
            }
        }
    },
    deleteProducto: (req, res) => {
        const id = req.params.idProducto
        try {
            databaseProductos.deleteProdById(id);
            res.sendStatus(204)} 
        catch (error) {
            if (error.tipo === 'db not found') {
                res.status(404).json({ error: error.message })
            } else {
                res.status(500).json({ error: error.message })
            }
        }
    }
}

module.exports =  {controladoresApi}
