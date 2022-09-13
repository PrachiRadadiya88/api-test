const express = require('express');
const dbconnect = require('./mongodb');
const mongodb = require('mongodb')
const app = express();

app.use(express.json());

app.get('/data', async (req, resp) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data) 
});

app.post('/', async (req, resp) => {
    //console.log(req.body)
    let data = await dbconnect();
    let result = await data.insertOne(req.body)

    resp.send(result)
})

app.put("/:name",async (req,resp)=>{
    // console.log(req.body)
    let data = await dbconnect();
    //let result= await data.updateOne({name:req.body.name},{$set:req.body})
    let result= await data.updateOne({name:req.params.name},{$set:req.body})
    resp.send({result:"updated"})
})

app.delete("/:id",async (req,resp)=>{
    console.log(req.params.id)
    let data = await dbconnect();
    let result = await data.deleteOne({_id:new mongodb.ObjectId( req.params.id)})

    
    resp.send(result)

})

app.listen(5000);