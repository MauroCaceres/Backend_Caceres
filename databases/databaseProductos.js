const fs = require("fs");
const productos = JSON.parse(fs.readFileSync("databases/productos.txt",'utf-8'))

const databaseProductos = {
  getAll: () => {
    return [...productos];
  },
  getRandom: () => {
    const id = parseInt(Math.random() * 3) + 1;
    return productos.filter((a) => a.id === id);
  },
};

module.exports = { databaseProductos };
