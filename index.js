require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./Db/connection')
const router = require('./Route/router')
///create a server
const ecartServer = express()
ecartServer.use(cors())
ecartServer.use(express.json())
ecartServer.use(router)
// create a port

const PORT = 3000 || process.env.PORT

ecartServer.listen(PORT,()=>{
    console.log("e-cart server successfully connected" + PORT);
})

ecartServer.get('/',(req,res)=>{
    res.send(200).send(`<h1>E-cart Server Connected Successfully</h1>`)
})