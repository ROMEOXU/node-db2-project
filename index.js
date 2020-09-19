const express = require ("express");
const server = express();
const db = require("./config");
const port = process.env.PORT || 3000;
server.use(express.json());

//err handler
server.use((err,req,res,next)=>{
    res.status(500).json({
        message:"sth wrong,try later"
    })
});
server.get('/',async(req,res,next)=>{
    try{
        const cars = await db("cars2")
        res.json(cars)
    }catch(err){
     next(err)
    }
})
server.listen(port,()=>{
    console.log(`listening on ${port}`)
})