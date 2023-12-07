const products = require('../Model/productsSchema')
const Products = require('../Model/productsSchema')
// to get all products

exports.getAllProductsController= async(req,res)=>{
    try {
        const allProducts = await Products.find()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(err)
    }
}

/// to geta single products
exports.getASingleProducts=async(req,res)=>{
    const {id}= req.params
    try {
        const singleproducts = await Products.findOne({id})
        res.status(200).json(singleproducts)
    } catch (error) {
        res.status(401).json(err)

    }

    
}