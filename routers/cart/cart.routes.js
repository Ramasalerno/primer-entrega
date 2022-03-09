const express = require(`express`);
const cartController = require(`../../controllers/cart.controller`);

const router = express.Router();

router.post(`/`, cartController.postController); // Sirve para crear un carrito y devolver su ID

router.delete(`/:id`, cartController.deleteCartController); // Vacia el carrito y lo elimina

router.get(`/:id/products`, cartController.getController); // Sirve para listar los productos guardados en el carrito

router.post(`/:id/products`, cartController.postProductInCartController); // Incorpora productos por ID

router.delete(`/:id/products/:id_prod`, cartController.deleteProductInCartController); 

module.exports = router;