//const { PoolOutlined, ViewModuleSharp } = require("@mui/icons-material")
const pool = require("../db/db.js").pool;
const queries = require("./queries.js")

const getFarmers = (req, res) => {
    pool.query(queries.getFarmers, (error, results) => {
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getFarmers,
}