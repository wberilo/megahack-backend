const express = require('express') //used for web applications
const path = require('path') //used for rendering web pages to client

const handler = express.Router() //used to route specific request types

handler.use(express.static("./static/root")) //used to allow use of all static files

handler.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "root.html"))})

handler.post("/", (request, response) => {
  response.sendFile(path.join(__dirname, "root.html"))})

module.exports = handler