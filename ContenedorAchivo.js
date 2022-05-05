
const fs = require('fs')
const Product = require('./producto.js')

class ContenedorArchivo {
    constructor(ruta) {
        this.ruta = ruta
        this.productos = []
    }

    saveJSN() {
        const productojsn = JSON.stringify(this.productos, null, 2)
        return fs.promises.writeFile(this.ruta, productojsn)
    }

    readJSN() {
        return fs.promises.readFile(this.ruta, 'utf-8')
            .then(texto => {
                const productoarray = JSON.parse(texto)
                this.productos = productoarray
            })
    }

    async save(data) {
        const product = new Product(data.title, data.price, data.thumbnail)
        await this.readJSN()
        this.productos.push(product)
        await this.saveJSN()
    }

    async getAll() {
        await this.readJSN()
        return [...this.productos]
    }

    async getByTitle(title) {
        await this.readJSN()
        const foundTitle = this.productos.find(product => product.title === title)
        console.log(foundTitle)
    }

    async deleteByTitle(title) {
        await this.readJSN()
        const index = this.productos.findIndex(product => product.title === title)
        if (index !== -1) {
            this.productos.splice(index, 1)
            await this.saveJSN()
        }
    }

    async deleteAll() {
        this.productos = []
        return this.saveJSN()
    }
}

module.exports = ContenedorArchivo