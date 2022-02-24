const express = require("express");
const { FindCursor } = require("mongoose/node_modules/mongodb");
require("./db/conn");
const app = express();

const demo = require('./model/demo')

app.use(express.json());


app.post('/demo', async (req,res)=>{

    try {
        const data = new demo(req.body)
        const crateData = await data.save();
        res.status(201).send(data)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

app.get('/demo', async (req,res)=>{
    try{
        const getdata = await demo.find()
        res.send(getdata)
    }catch(e){
        res.send(e)
    }
}),


app.get('/demo/:id', async (req, res)=>{
    try{
        const _id = req.params.id
        const data =  await demo.findById(_id) 
        // console.log(req.params.id)
         res.send(data)
    }catch(e){
        res.send(e)
    }
})

app.patch('/demo/:id', async (req, res)=>{
    try{
        const _id =  req.params.id
        const update = await demo.findByIdAndUpdate(_id, req.body,{
            new :true
        } )
        res.send(update)

    }catch(e){
        res.send(e)
    }
})

app.delete('/demo/:id', async (req, res)=>{
    try{
        const _id =  req.params.id
        const deleteid = await demo.findOneAndDelete(_id)
        res.send('delete')

    }catch(e){
        res.send(e)
    }
})



const port = process.env.APP_PORT || 3000
app.listen(port, () => console.log(`Example app listening on ${port} port!`))