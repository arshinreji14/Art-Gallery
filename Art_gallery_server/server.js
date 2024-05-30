const express =require("express")
const mongoose = require("mongoose")
const bodyParser =require("body-parser");
const cors = require("cors")
const { stringify } = require('qs');
const app =express();
const port =4000;
app.use(bodyParser.json())
app.use(cors());
mongoose.connect('mongodb://localhost:27017/data')
const db =mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",function(){
  console.log("mongoos connected succesfully");
})
const productSchema =new mongoose.Schema({

      image: String,
      title: String,
      description: String,
      price:String
});
const cartSchema =new mongoose.Schema({

  image: String,
  title: String,
  description: String,
  price:String
});
const Product =mongoose.model("Product",productSchema);
const Cart =mongoose.model("Cart",cartSchema)

app.get('/api/products',async(req,res)=>{
  try{
const products =await Product.find();
res.json(products)
  }
  catch (error){
res.status(500).json({message: error.message});
  }
});
// for cart
app.get('/api/cart',async(req,res)=>{
  try{
const cart =await Cart.find();
res.json(cart)
  }
  catch (error){
res.status(500).json({message: error.message});
  }
});
app.post('/api/products', async (req, res) => {
  console.log('Request Body:', req.body); // Log request body for debugging
  const product = new Product({
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error saving product:', error); // Log error for debugging
    res.status(400).json({ message: error.message });
  }
});
//post req for cart
app.post('/api/cart', async (req, res) => {
  console.log('Request Body:', req.body); // Log request body for debugging
  const cart = new Cart({
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
  });
  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (error) {
    console.error('Error saving product:', error); // Log error for debugging
    res.status(400).json({ message: error.message });
  }
});
app.listen(port,()=>{
  console.log(`server is running on :${port}`);
})
