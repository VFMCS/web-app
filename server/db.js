const Pool = require('pg').Pool

const pool = new Pool({
    user: "guest",
    host: "34.134.101.113",
    database: "vfmcs1",
    password: "guestpass",
    port: "5432",
})

module.exports = pool;