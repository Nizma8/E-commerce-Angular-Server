const users = require("../Model/userSchema")
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET
//register
exports.userRegisterController = async(req,res)=>{
    const {username,email,password}= req.body
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("user Already exists..please login..")
        }else{
            const newUser = new users({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    } catch (error) {
        res.status(401).json(error)
        
    }
}

// login
exports.loginController = async(req,res)=>{
    const {email,password}= req.body
    try {
        const existinguser = await users.findOne({email,password})
        if(existinguser){
            const token = jwt.sign({userId:existinguser._id},jwtSecret)
            res.status(200).json({
                existinguser,token
            })
        }else{
            res.status(406).json("Ivalid login credentails")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

