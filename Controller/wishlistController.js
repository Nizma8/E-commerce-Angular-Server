const wishlists = require("../Model/wishlistSchema")

exports.addTowishlistController = async(req,res)=>{
    const {id,title,price,description,category,image,rating}=req.body
    const userId = req.payload
    try {
      const existingProduct = await wishlists.findOne({id,userId}) 
      if(existingProduct) {
        res.status(406).json("product already wxists in ypur wishlist")
      }else{
        const newProduct = new wishlists({
            id,title,price,description,category,image,rating,userId
        })
    await  newProduct.save()
    res.status(200).json(newProduct)
    console.log(newProduct);
      }
    } catch (error) {
     res.status(401).json(error)   
     console.log(error);
    }
}
exports.getUserWishlistController =async(req,res)=>{
  const userId = req.payload
  try {
    const userWishlist = await wishlists.find({userId})
    res.status(200).json(userWishlist)

  } catch (error) {
    res.status(401).json(error)   
     console.log(error);
  }
}

exports.removeWishlist = async(req,res)=>{
  const {productid} = req.params
  try {
  const deletedProducts =  await wishlists.findByIdAndDelete({_id:productid})
  res.status(200).json(deletedProducts)

  } catch (error) {
    res.status(401).json(error)   
  }
}