//See server readme for endpoint documentation
const express = require("express");
const cors = require('cors');
const server = express();
const PORT = 5002
//Start express server and cloud sql proxy
server.use(cors());
server.use(express.json());
server.listen(PORT, () => {
  //console.log(`Express server listening on Port: ${PORT}`)
})

server.get('/users', (req, res) => {
  res.status(200).json({})
})

server.post('/users', (req, res) => {
  res.status(200).json({})
})

server.patch('/users', (req, res) => {
  res.status(200).json({})
})

module.exports = server