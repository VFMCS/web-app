//See server readme for endpoint documentation
const proxy = require('./db/db.js');
const express = require("express");
const usrapi = require('./user-api/routes.js');
const prdapi = require('./products-api/routes.js');
const farmapi = require('./vendors-api/routes.js');
const srchEndpoint = require('./search-endpoint/routes.js');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
proxy.startProxy();

app.use(cors());
app.use(express.json());

app.use('/api/users', usrapi);
app.use('/api/products', prdapi);
app.use('/api/vendors', farmapi);
app.use('/search', srchEndpoint);


app.listen(PORT, () => {
  console.log(`Express server listening on Port: ${PORT}`)
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
