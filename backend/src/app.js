const express = require('express')
require('./db/mongoose')
const eventRouter = require('./routers/events')
const cors=require("cors");
const bodyParser = require("body-parser")

const app = express()

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.json())
app.use(eventRouter)

module.exports = app
