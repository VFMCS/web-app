const express = require("express");
const usrapi = require('./user-api/routes.js')
const prdapi = require('./products-api/routes.js')
const farmapi = require('./farmers-api/routes.js')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/users', usrapi);
app.use('/api/products', prdapi);
app.use('/api/farmers', farmapi);


app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})

/*
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/players", playersRouter);
app.listen(port, function() {
  console.log("Runnning on " + port);
});
module.exports = app;
*/
