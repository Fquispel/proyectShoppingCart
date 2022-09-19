const express = require("express");
const shoppingCartController = require("./../controllers/cartController.js");
const authController = require("./../controllers/authController");
const shoppingRouter = express.Router();

//routes
shoppingRouter.all('/', authController.protect)
shoppingRouter.get('/', shoppingCartController.getAllCart)
shoppingRouter.post('/product', authController.protect, shoppingCartController.addProductToShoppingCart)
shoppingRouter.post('/pay', authController.protect, shoppingCartController.payShoppingCart)
shoppingRouter.delete('/product/:id', authController.protect, shoppingCartController.deleteShoppingCart)

module.exports = shoppingRouter;
