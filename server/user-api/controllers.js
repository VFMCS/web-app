const { PoolOutlined } = require("@mui/icons-material")
const  pool = require("../db.js") 
const queries = require("./queries.js")
 
const getUsers = (req,res) => {
    pool.query(queries.getUsers,(error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
module.exports = {
    getUsers
}