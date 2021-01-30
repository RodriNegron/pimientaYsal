const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/DataBase.json');
const platos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const aboutUs = {
    nombre: "Pimienta & Sal",
    descripcion1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients",
    descripcion2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagen: "/images/principal.jpg"
}


const mainController = {

    index: (req, res) => {
        res.render("index", { platosMenu: platos, aboutUs:aboutUs });
    }
}

module.exports = mainController;