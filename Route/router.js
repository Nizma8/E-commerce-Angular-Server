const express = require ('express')
const { getAllProductsController, getASingleProducts } = require('../Controller/productController')
const { userRegisterController, loginController } = require('../Controller/userController')
const jwtMiddleWare = require('../Middleware/jwtMiddleWare')
const { addTowishlistController, getUserWishlistController, removeWishlist } = require('../Controller/wishlistController')
const { addToCartController, getCartCountroller, incrementCartController, decrementCartController, removeCartController, removeAll } = require('../Controller/cartController')

const router = new express.Router()

// to get all products

router.get('/products/all',getAllProductsController)
// view products
router.get ('/products/view/:id',getASingleProducts)
// to register
router.post('/user/register',userRegisterController)
//login
router.post('/user/login',loginController)
router.post('/user/wishlist',jwtMiddleWare,addTowishlistController)
router.get('/user/wishlist',jwtMiddleWare,getUserWishlistController)
router.delete('/user/wishlist/remove/:id',jwtMiddleWare,removeWishlist)
router.post('/user/cart/add',jwtMiddleWare,addToCartController)
router.get('/user/cart',jwtMiddleWare,getCartCountroller)
router.get('/user/cart/increment/:id',jwtMiddleWare,incrementCartController)
router.get('/user/cart/decrement/:id',jwtMiddleWare,decrementCartController)
router.delete('/user/card/delete/:id',jwtMiddleWare,removeCartController)
router.delete('/user/card/empty',jwtMiddleWare,removeAll)



module.exports=router