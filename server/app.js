const express = require("express");
const usrapi = require('./user-api/routes.js')
const prdapi = require('./products-api/routes.js')
const farmapi = require('./farmers-api/routes.js')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
app.use(cors());
app.use(express.json());
app.use('/api/users', usrapi);
app.use('/api/products', prdapi);
app.use('/api/farmers', farmapi);

/*
app.get('/', (req, res) => {
  res.send('hello ab')
})
*/


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

=======
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

app.get('/search/ers', cors(), (req, res) => {
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



>>>>>>> 1afcfe3f (initial)
