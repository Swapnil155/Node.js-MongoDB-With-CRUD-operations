require("../db/conn");
const demo = require('../model/demo')
const {logger} = require('../logger/logger');

module.exports = {
    insertData : async (req, res) => {
        if (req.file === undefined) return res.json({
            success : "0",
            message : "you must select a file."});
    
        const imgUrl = `http://localhost:3000/demo/${req.file.filename}`;
    
        try {
    
            const data = new demo({
                name : req.body.name,
                img : imgUrl,
                summary : req.body.summary
            })
    
            const crateData = await data.save();
            return res.status(201).json({
                success : "1",
                message : "data insert successfully",
                data : data
            })
            //console.log(data)
            logger.info(data)
        }catch(e){
            logger.error(e)
            //console.log(e)
            return res.status(400).json({
                success : "0",
                message : "Failed to inster data",
                error : e.message
            })
        }
    },

    getAllData : async (req, res) => {
        try{
            const getdata = await demo.find()
            if(getdata != 0){
                return res.status(200).json({
                    success : "1",
                    data : getdata
                })
            }
            res.json({
                success : "0",
                message : "Data Not Exisit!"
            })
        }catch(e){
            logger.error(e)
            //console.log(e)
            return res.status(200).json({
                success : "0",
                message : "administrator error please contact us!"
            })
        }
    },

    getDataByID : async (req, res) =>{
        try{
            const _id = req.params.id
            const data =  await demo.findById(_id) 
            // console.log(req.params.id)
            if(data != null){
                return res.json({
                    success : "1",
                    id : _id,
                    data : data
                })
            }
            return res.json({
                success : "0",
                id : _id,
                message : "Data Not Exisit"
            })
             
        }catch(e){
            logger.error(e)
            //console.log(e)
            return res.status(400).json({
                success : "0",
                message : "administrator error please contact us!"
            })
        }
    },

    updateData : async (req, res) => {
        if (req.file === undefined) return res.json({
            success : "0",
            message : "you must select a file."
        });
    
        const imgUrl = `http://localhost:3000/demo/${req.file.filename}`;
    
        try{
            const _id =  req.params.id
    
            const update = await demo.findByIdAndUpdate(_id, {$set:{
                name : req.body.name,
                img : imgUrl,
                summary : req.body.summary
            }},{
                new :true
            } )
            if(update != null){
                return res.json({
                    success : "1",
                    id : _id,
                    message : "Successfully Update data",
                    data : update
                })
            }
            return res.json({
                success : "0",
                id : _id,
                message : "Data Not Exisit"
            })
    
        }catch(e){
            logger.error(e)
            //console.log(e)
            return res.status(400).json({
                success : "0",
                message : "administrator error please contact us!"
            })
        }
    },

    deleteByID : async (req, res) =>{
        try{
            const _id =  req.params.id
            const deleteid = await demo.findByIdAndDelete(_id)
            if(deleteid != null){
                return res.json({
                    success : "1",
                    id : _id,
                    message : "successfully delete",
                    data : deleteid
                })
            }
            return res.json({
                success : "0",
                id : _id,
                message : "Data Not Exisit"
            })
            
    
        }catch(e){
            logger.error(e)
            //console.log(e)
            return res.status(400).json({
                success : "0",
                message : "administrator error please contact us!"
            })
        }
    }


}