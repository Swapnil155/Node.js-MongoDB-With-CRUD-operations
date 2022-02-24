const  mongoose  = require("mongoose");


mongoose.connect('mongodb://localhost:27017/Demo', {

}).then(()=>{
    console.log("Connection Bulid")
}).catch((e)=>{
    console.log(e)
})
