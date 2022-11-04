const express = require("express");
const usrapi = require("./user-api/routes.js");
const prdapi = require("./products-api/routes.js");
const farmapi = require("./farmers-api/routes.js");
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('dotenv').config()
app.set('view engine', 'ejs')
app.use('/api/', require('./routes/hello'))
app.use('/data/', require('./routes/data'))
/*
app.get('/', (req, res) => {
  res.send('hello ab')
})
*/

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    console.log(hi);
    res.status(200).json('start');
})


app.get('/search/:key', cors(), (req, res) => {
  search_query = req.params.key;
  console.log(search_query);

  const {Client} = require('pg')

    const client = new Client({
        host: "34.134.101.113",
        user: "guest",
        port: 5432,
        password: "guestpass",
        database: "vfmcs1"

    })

    client.connect();
    
    query_string = "SELECT * FROM products WHERE UPPER(CONCAT(name, '#', product_type, '#', product_category)) LIKE UPPER(" + "'%" + search_query + "%')";
    console.log(query_string);

    let data = [];
    client.query(query_string, (err, resp) => {
        if(!err){
            //console.log(res.rows);
            data = resp.rows;
            res.send(resp.rows)
        }
        else{
            console.log(err.message);
        }

        client.end;
    })
})

app.get('/search/', cors(), (req, res) => {
  search_query = req.params.key;
  console.log(search_query);

  const {Client} = require('pg')

    const client = new Client({
        host: "34.134.101.113",
        user: "guest",
        port: 5432,
        password: "guestpass",
        database: "vfmcs1"

    })

    client.connect();
    
    query_string = "SELECT * FROM products";
    console.log(query_string);

    let data = [];
    client.query(query_string, (err, resp) => {
        if(!err){
            //console.log(res.rows);
            data = resp.rows;
            res.send(resp.rows)
        }
        else{
            console.log(err.message);
        }

        client.end;
    })
})


app.listen(PORT, () =>{
  const url = `http://localhost:${PORT}/`
  console.log(`Listening on Port: ${PORT}`)

})

/*
const playersRouter = require("./routes/players");



