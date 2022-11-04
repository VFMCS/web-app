const {Client} = require('pg')

const client = new Client({
    host: "34.134.101.113",
    user: "guest",
    port: 5432,
    password: "guestpass",
    database: "vfmcs1"

})

client.connect();

client.query("SELECT * FROM users WHERE is_vendor = true", (err, res) => {
    if(!err){
        //console.log(res.rows);
        farmers = res.rows;
    }
    else{
        console.log(err.message);
    }

    client.end;
})

client.query("SELECT * FROM users WHERE is_vendor = false", (err, res) => {
    if(!err){
        //console.log(res.rows);
        customers = res.rows;
    }
    else{
        console.log(err.message);
    }

    client.end;
})

client.query("SELECT * FROM products", (err, res) => {
    if(!err){
        //console.log(res.rows);
        products = res.rows;
    }
    else{
        console.log(err.message);
    }

    client.end;
})

exports.data = (req, res) => {
    res.json({
        farmers, customers, products
    })
};

