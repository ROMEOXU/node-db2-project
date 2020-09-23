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
server.post('/',async(req,res,next)=>{
    try{
    const [id] = await db.insert({
        carmake:req.body.carmake,
        carmodel:req.body.carmodel,
        carVin:req.body.carVin,
        mileage:req.body.mileage
    }).into("cars2")
    const newcar = await db('cars2').where("id",id).first();
    res.status(201).json(newcar);
    }catch(err){
     next(err)
    }
})
server.listen(port,()=>{
    console.log(`listening on ${port}`)
})