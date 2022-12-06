const pool = require("../db/db.js").pool;
const queries = require("./queries.js")

const productSearch = (req, res) => {
    search_query = '%' + req.params.key + '%';
    pool.query(queries.productSearch, [search_query], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const productSearchByVendorID = (req, res) => {
    vendor_id = req.params.vendor_id;
    product_key = '%' + req.params.product_key + '%';
    pool.query(queries.productSearchByVendorID, [vendor_id, product_key], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const returnAllProducts = (req, res) => {
    pool.query(queries.returnAllProducts, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const vendorSearch = (req, res) => {
    search_query = '%' + req.params.key + '%';
    pool.query(queries.vendorSearch, [search_query], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const returnAllVendors = (req, res) => {
    pool.query(queries.returnAllVendors, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    productSearch,
    productSearchByVendorID,
    returnAllProducts,
    vendorSearch,
    returnAllVendors
}