const mongoose = require('mongoose')
const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("E-cart Server connected successfull with Mongodb...");
}).catch(err=>{
    console.error(`Mongoodb Connection FAiled!! ${err}`);
})