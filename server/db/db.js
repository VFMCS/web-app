const Pool = require('pg').Pool
const exec = require('child_process').execFile;
const port = process.env.PORT || 5433;
/*
const pool = new Pool({
    user: "guest",
    host: "34.134.101.113",
    database: "vfmcs1",
    password: "guestpass",
    port: "5432",
})*/


//This is for local development, will potentially need modification for deployment
const startProxy = () => {
    instance = `radiant-saga-366418:us-central1:vfmcs-db=tcp:${port}`;
    cred_file = "./db/db-service-account.json";
    console.log(`Starting cloud sql auth proxy on port: ${port}...`);
    exec('./db/cloud_sql_proxy.exe', ["-instances=" + instance, "-credential_file=" + cred_file], (err, data) => {
        if (err) throw err;
        console.log(data);
    })
}


const pool = new Pool({
    user: "guest",
    host: "127.0.0.1",
    database: "vfmcs1",
    password: "guestpass",
    port: `${port}`,
})

module.exports = {
    pool,
    startProxy,
}

//startProxy();