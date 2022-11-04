const express = require("express");
const usrapi = require("./user-api/routes.js");
const prdapi = require("./products-api/routes.js");
const farmapi = require("./farmers-api/routes.js");
const app = express();
//const PORT = process.env.PORT || 3000;
const PORT = 3001;

app.use(express.json());
app.use('/api/users',usrapi);
app.use('/api/products',prdapi);
app.use('/api/farm',farmapi);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})

