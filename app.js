const express = require("express");
require('dotenv').config();
require("./db/conn");
const router = require("./api/routes");
const { logger } = require("./logger/logger");

const app = express();

app.use(express.json());

app.use('/demo',router)


const port = process.env.APP_PORT || 5000
app.listen(port, () => {
    //console.log(`Example app listening on ${port} port!`)
    logger.info(`Example app listening on ${port} port!`)
})