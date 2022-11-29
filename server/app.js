//See server readme for endpoint documentation
const express = require("express");
const cors = require('cors');
const authProxy = require('./db/db.js');
const app = express();
const PORT = process.env.PORT || 3001;
//Start express server and cloud sql proxy
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Express server listening on Port: ${PORT}`)
})
authProxy.startAuthProxy();
//Endpoint route files
const usrapi = require('./user-api/routes.js');
const prdapi = require('./products-api/routes.js');
const farmapi = require('./vendors-api/routes.js');
const srchEndpoint = require('./search-endpoint/routes.js');
const curr_user_api = require('./curr-user-api/routes.js');
const trnapi = require('./transaction-api/routes.js');

//Endpoint main routes
app.use('/api/transaction', trnapi);
app.use('/api/users', usrapi);
app.use('/api/products', prdapi);
app.use('/api/vendors', farmapi);
app.use('/search', srchEndpoint);
app.use('/curr-user-api', curr_user_api);


