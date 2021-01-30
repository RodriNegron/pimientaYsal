const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/DataBase.json');
const platos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productController = {

    detail: (req,res)=>{
        res.render("detalleMenu");
    },

    id: (req,res) =>{
        const idPlato = req.params.id;
        res.render("productDetail", {platosMenu: platos, idPlato: idPlato})
    }

}

module.exports=productController;

