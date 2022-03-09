const express = require(`express`);
const productController = require(`../../controllers/product.controller`);

const router = express.Router();

router.get(`/`, productController.getControllerQuery); // Me permite listar todos los productos disponibles ó un producto por su id

router.get(`/:id`, productController.getControllerParams); // Me permite listar todos los productos disponibles ó un producto por su id 

router.post(`/`, productController.postController); // Para incorporar productos al listado

router.put(`/:id`, productController.putController); // Actualiza un producto por su id

router.delete(`/:id`, productController.deleteController); // Borra un producto por su id

module.exports = router;