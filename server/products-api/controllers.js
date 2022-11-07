//const { PoolOutlined, ViewModuleSharp } = require("@mui/icons-material")
const pool = require("../db/db.js").pool;
const queries = require("./queries.js")

const getAllProducts = (req, res) => {
    pool.query(queries.getAllProducts, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getProductByVendorID = (req, res) => {
    vendor_id = req.params.vendor_id;
    pool.query(queries.getProductByVendorID, [vendor_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getAllProducts,
    getProductByVendorID
}