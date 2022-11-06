const  pool = require("../db.js") 
const queries = require("./queries.js")

const productSearch = (req,res) => {
    search_query = '%' + req.params.key + '%';
    pool.query(queries.productSearch,[search_query],(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    productSearch,
}