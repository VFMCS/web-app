const pool = require("../db/db.js").pool;
const queries = require("./queries.js")

const getUserByID = (req,res) => {
    const user_id = req.params.user_id;
    pool.query(queries.getUserByID,[user_id],(error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getUserByID,
    
}