const jwt = require('jsonwebtoken')
const secret = process.env.JWTSECRET
const jwtMiddleWare = (req,res,next)=>{
    const token = req.headers['authorization'].split(" ")[1]    

    try {
            // console.log(token);
        const jwtResponse = jwt.verify(token,secret)
        req.payload = jwtResponse.userId
        next()
    } catch (error) {
        res.status(401).json("please login")
    }
}
module.exports=jwtMiddleWare