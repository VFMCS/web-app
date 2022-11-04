//const { PoolOutlined, ViewModuleSharp } = require("@mui/icons-material")
const  pool = require("../db.js") 
const queries = require("./queries.js")

const getAllProducts = (req,res) => {
    pool.query(queries.getAllProducts,(error,results)=>{
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getAllProducts,
}