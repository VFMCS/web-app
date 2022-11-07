//const { PoolOutlined, ViewModuleSharp } = require("@mui/icons-material")
const pool = require("../db/db.js").pool;
const queries = require("./queries.js")
const moment = require("moment")

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

const insertProd = (req, res) => {
	const values = ["2", req.body.name, req.body.details, moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"), "true", req.body.quantity, req.body.price, req.body.photo, req.body.product_type, req.body.product_category];
	pool.query(queries.insertProd, values, (error, results) => {
		res.status(201).send("Product Created");
	})
}

module.exports = {
    getAllProducts,
	insertProd,
    getProductByVendorID
}
