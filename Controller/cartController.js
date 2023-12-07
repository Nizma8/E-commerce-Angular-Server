const carts = require("../Model/CartsSchema")

exports.addToCartController = async(req,res)=>{
    const userId = req.payload
    const {id,title,price,description,category,image,rating,quantity}=req.body
    try {
        const existingProduct = await carts.findOne({id,userId})
        if(existingProduct){
            // increment quantity
            existingProduct.quantity+=1
            // total price
            existingProduct.totalPrice=existingProduct.price*existingProduct.quantity
            await existingProduct.save()
            res.status(200).json("items Added to your cart")
        }else{
            const newProducts = new carts({
                id,title,price,description,category,image,rating,quantity,totalPrice:price,userId
            })
            await newProducts.save()
            res.status(200).json("Item added to your cart")
        }
    } catch (error) {
        
    }


}

exports.getCartCountroller = async(req,res)=>{
    const userId = req.payload
try {
    const allProducts = await carts.find({userId})
    res.status(200).json(allProducts)
} catch (error) {
    res.status(401).json(error)   
 
}
}
exports.incrementCartController = async(req,res)=>{
    const {id} = req.params
    try {
        const cartItem =await carts.findOne({_id:id})
            cartItem.quantity+=1
            cartItem.totalPrice= cartItem.quantity* cartItem.price
            await cartItem.save()
            res.status(200).json("success")
        
    } catch (error) {
        res.status(401).json(error)   
  
    }
}


exports.decrementCartController = async(req,res)=>{
    const {id} = req.params
    try {
        const cartItem =await carts.findOne({_id:id})
        if(cartItem){
            cartItem.quantity-=1
            if(cartItem.quantity===0){
                await cartItem.deleteOne({id})
                res.status(200).json("success")
            }else{
                cartItem.totalPrice= cartItem.quantity* cartItem.price
                await cartItem.save()
                res.status(200).json("success")
            }

        }else{
            res.status(404).json("not found")
        }
           
        
    } catch (error) {
        res.status(401).json(error)   
  
    }
}

exports.removeCartController = async(req,res)=>{
  const {id} = req.params
//   const userId = req.payload
  try {
    await carts.deleteOne({_id:id})
    res.status(200).json("item removed")
  } catch (error) {
    res.status(401).json(err)
  }
}

exports.removeAll = async(req,res)=>{
  const userId = req.payload
try {
    await carts.deleteMany({userId})
    res.status(200).json("your cart is empty!!")
} catch (error) {
  res.status(401).json(err)  
}
}