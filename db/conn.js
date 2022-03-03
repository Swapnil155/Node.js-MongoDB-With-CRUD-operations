const  mongoose  = require("mongoose");
const { logger } = require("../logger/logger");
require('dotenv').config();

mongoose.connect(process.env.DB, {

}).then(()=>{
    console.log("Connection Bulid")
    logger.info("Connection Bulid")
}).catch((e)=>{
    logger.info(e)
})
