const express = require("express");
const usrapi = require("./user-api/routes.js")
const app = express();
//const PORT = process.env.PORT || 3000;
const PORT = 3001;

app.use(express.json());

app.get("/",(req,res) => {
  res.send("Hello world");
})

app.use('/api/users',usrapi);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})

