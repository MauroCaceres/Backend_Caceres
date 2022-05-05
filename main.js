const ContenedorArchivo = require('./ContenedorAchivo')

async function main() {

    const contenedor = new ContenedorArchivo('./productos.txt')

    const producto = {
        title: 'ProductoNUEVO',
        price: 300.24,
        thumbnail: 'www.thumbnail.com'
    }

    await contenedor.save(producto)

    await contenedor.getByTitle("ProductoNUEVO")

    console.log(await contenedor.getAll())

    await contenedor.deleteByTitle("ProductoNUEVO")

    // await contenedor.deleteAll()             //ADVERTENCIA: Elimina todo el contenido del array
}

main()