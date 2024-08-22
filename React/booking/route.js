
const express = require('express');
const {
  home,
  signUp,
  signIn,
  adminSignUp,
  adminSignIn,
  addProduct,
  updateProduct,
  getUser,
  updateUser,
  deleteProduct,
  getProducts,
  addToCart,
  removeFromCart,
  updateCart,
  getCart,
  placeOrder, 
  getOrders,
  listOrders
} = require('./controller');

const router = express.Router();

// Public Routes
router.route('/').get(home);
router.route('/signin').post(signIn);
router.route('/signup').post(signUp);
router.route('/admin/signup').post(adminSignUp); // Admin signup route
router.route('/admin/signin').post(adminSignIn); // Admin login route
router.route('/products').get(getProducts);

// Admin Routes
router.route('/addproduct').post(addProduct);
router.route('/updateproduct').post(updateProduct);
router.route('/deleteproduct').delete(deleteProduct);
router.route('/listorders').get(listOrders); // List orders for admin

// Cart Routes
router.route('/cart').post(addToCart);        // Add to cart
router.route('/cart/remove').post(removeFromCart); // Remove from cart
router.route('/cart/update').post(updateCart); // Update cart
router.route('/cart/:userId').get(getCart);    // Get cart for a user

// User Routes
router.route('/user/:userId').get(getUser).put(updateUser);


router.post('/placeorder', placeOrder);
router.get('/getorders', getOrders);



module.exports = router;
