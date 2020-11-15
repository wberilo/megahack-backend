//loading all frameworks
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const morgan = require('morgan')
const application = express()

application.use(morgan('dev')) 
let PORT = 8080
if(process.argv.length > 2){PORT = process.argv[2]}
application.listen(PORT, () => { 
    console.log("localhost has begun listening to requests on:[" + PORT + "]")})
application.use("/", require("./static/root/roothandler"))
