const mongoose = require('mongoose')

    mongoose.connect("mongodb://localhost:27017/e-comm");
   const ProductSchema = new mongoose.Schema({
      name: String,
      price: Number,
      brand: String,
      catagory: String
   });
   const saveInDb = async () => {
   const ProductsModel = mongoose.model('products', ProductSchema);
   let data = new ProductsModel({ name: "U 13", price: 1000, brand: "maxx", catagory: 'mobile' });
   let result = await data.save();
   console.log(result)
}

const updateInDb=async()=>{
   const ProductsModel = mongoose.model('products', ProductSchema);
   let data = await ProductsModel.updateOne(
      {name:"U 13"},
      {
         $set:{price:2000}
      }
   )
   console.log(data)
}

const  deleteInDb=async()=>{
   const ProductsModel = mongoose.model('products', ProductSchema);
   let data = await ProductsModel.deleteOne({name:'nokia 1023'})
   console.log(data)
}


const  findInDb=async()=>{
   const ProductsModel = mongoose.model('products', ProductSchema);
   let data = await ProductsModel.deleteOne({name:'nokia 1023'})
   console.log(data)
}
findInDb(); 