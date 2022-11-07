const Pool = require('pg').Pool
/*
const pool = new Pool({
    user: "guest",
    host: "34.134.101.113",
    database: "vfmcs1",
    password: "guestpass",
    port: "5432",
})*/


//For local development with Auth Proxy
//Edit host and port to reflect host and port of proxy
const pool = new Pool({
    user: "guest",
    host: "127.0.0.1",
    database: "vfmcs1",
    password: "guestpass",
    port: "5433",
})

module.exports = pool;