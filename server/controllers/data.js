const {Client} = require('pg')

const client = new Client({
    host: "34.134.101.113",
    user: "guest",
    port: 5432,
    password: "guestpass",
    database: "vfmcs1"

})

client.connect();

client.query("SELECT username FROM users WHERE is_vendor = true", (err, res) => {
    if(!err){
        console.log(res.rows);
        data = res.rows;
    }
    else{
        console.log(err.message);
    }

    client.end;
})

exports.data = (req, res) => {
    res.json({
        data
    })
};

