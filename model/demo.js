const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    }
})

const demo = new mongoose.model('DemoData', demoSchema)

module.exports = demo;