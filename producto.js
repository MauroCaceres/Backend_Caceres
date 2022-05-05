class Product {
    constructor(title, price, thumbnail) {

        if (!title) throw new Error('falta title')
        if (!price) throw new Error('falta price')
        if (price < 0) throw new Error('price es negativo')
        if (!thumbnail) throw new Error('falta thumbnail')

        this.title = title
        this.price = price
        this.thumbnail= thumbnail
    }
}

module.exports = Product