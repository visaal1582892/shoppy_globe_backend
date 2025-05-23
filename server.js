import express from "express";
import { insertDummyUsers, registerUser, loginUser } from "./controllers/userController.js";
import connectDB from "./db.js";
import { insertDummyProducts, getAllProducts, getProductById, addToCart, updateQuantity, removeFromCart } from "./controllers/productController.js";
import Product from "./models/Product.js";
import User from "./models/User.js";
import Cart from "./models/Cart.js";
import jwt from "jsonwebtoken";

// creating a simple express server
const app = express();
const PORT=5000;

// Using the same jwt secret as in the userController.js file
const JWT_SECRET = 'wrtcgunh3475yns2345mz92';

// Application level Middleware to parse incoming JSON requests
app.use(express.json());

// Connecting to MongoDB
await connectDB();

// Deleting any previous products and users and item un cart to avoid duplicates
await Product.deleteMany({});
await User.deleteMany({});
await Cart.deleteMany({});

// Inserting Some dummy Products and users
await insertDummyUsers();
await insertDummyProducts();

// Application level Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Route level middleware to allow only authenticated users to access certain routes
const validateUser = (req, res, next) => {
    const authHeader= req.headers['authorization'];
   if(!authHeader){
       return res.status(401).json({message: "This page requires authorization, please login"});
   }
   const token = authHeader.split(' ')[1];
   jwt.verify(token, JWT_SECRET, (err, decoded) => {
       if(err){
           return res.status(401).json({message: "Invalid token"});
       }
       req.user = decoded;
       next();
   });
}

// User registration and login routes
app.post('/register', registerUser);
app.post('/login', loginUser);

// All Product and cart routes
app.get('/products', getAllProducts);
app.get('/products/:id', getProductById);
app.post('/cart', validateUser, addToCart);
app.put('/cart/:productId', validateUser, updateQuantity);
app.delete('/cart/:productId', validateUser, removeFromCart);

// Listening on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



