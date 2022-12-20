//See server readme for endpoint documentation
const express = require("express");
const cors = require('cors');
const fs = require('fs');
const authProxy = require('./db/db.js');
const app = express();
const PORT = process.env.PORT || 5001;
//Start express server and cloud sql proxy
app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Express server listening on Port: ${PORT}`)
})
/*
var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync('key.pem', 'utf8');
var certificate = fs.readFileSync('cert.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();
const authProxy = require('./db/db.js');
const cors = require('cors');
app.use(cors());
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(5001);
*/
authProxy.startAuthProxy();
//Endpoint route files
const usrapi = require('./user-api/routes.js');
const prdapi = require('./products-api/routes.js');
const farmapi = require('./vendors-api/routes.js');
const srchEndpoint = require('./search-endpoint/routes.js');
const curr_user_api = require('./curr-user-api/routes.js');
const trnapi = require('./transaction-api/routes.js');
const revapi = require('./reviews-api/routes.js')
const cloudinary_api = require('./cloudinary/config.js');

//Endpoint main routes
app.use('/api/transaction', trnapi);
app.use('/api/users', usrapi);
app.use('/api/products', prdapi);
app.use('/api/vendors', farmapi);
app.use('/search', srchEndpoint);
app.use('/curr-user-api', curr_user_api);
app.use('/api/reviews', revapi);
app.use('/api/cloudinary', cloudinary_api);

module.exports = app


