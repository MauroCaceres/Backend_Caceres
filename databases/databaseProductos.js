const fs = require("fs");
const productos = JSON.parse(fs.readFileSync("databases/productos.txt",'utf-8'))

function generarId() {
  return `${Date.now()}`
}

const databaseProductos = {
  obtenerSegunId: id => {
    const productoBuscado = productos.find(p => p.id === id)
    if (!productoBuscado) {
        const error = new Error('no existe un producto con ese id')
        error.tipo = 'db not found'
        throw error
    }
    return productoBuscado
  },
  getAll: () => {
    return [...productos];
  },
  agregarProducto: datos => {
    const producto = datos
    producto.id = generarId()
    productos.push(producto)
    return producto
  },
  replaceProdById: (id, datos) => {
    const index = productos.findIndex(p => p.id === id)
    if (index === -1) {
        const error = new Error('no existe un producto con ese id')
        error.tipo = 'db not found'
        throw error
    }
    const producto = datos
    producto.id = id
    productos[index] = producto
    console.log("Producto reemplazado exitosamente!")
    return producto
  },
  deleteProdById: id => {
    const index = productos.findIndex(p => p.id === id)
    if (index === -1) {
        const error = new Error('no existe un producto con ese id')
        error.tipo = 'db not found'
        throw error
    }
    productos.splice(index, 1)
    console.log("Producto borrado exitosamente!")
  }
};

module.exports = { databaseProductos };
