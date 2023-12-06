const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config() 
const router = require('./router/studentRouter.js')



const app = express();
app.use(express.json())

 const port =process.env .port
 const db = process.env.dblink

app.use("/",router)

mongoose.connect(db).then(()=>{
    console.log('database connection is successful')
})
.catch((err)=>{
    console.log('unable to connect' + err)
})
app.listen(port,()=>{
    console.log("server is listening on port: " + port)

})