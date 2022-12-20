//const { PoolOutlined } = require("@mui/icons-material")
const pool = require("../db/db.js").pool;
const queries = require("./queries.js")

//Controllers for retrieving, setting, and removing transactions
const getCustomerCart = (req, res) => {
    const customer_id = req.params.id;
    pool.query(queries.getCustomerCart, [customer_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getCustomerCurrentOrders = (req, res) => {
    const customer_id = req.params.id;
    console.log(customer_id);
    pool.query(queries.getCustomerCurrentOrders, [customer_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getVendorReserveRequests = (req, res) => {
    const vendor_id = req.params.id;
    pool.query(queries.getVendorReserveRequests, [vendor_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getVendorReserves = (req, res) => {
    const vendor_id = req.params.id;
    pool.query(queries.getVendorReserves, [vendor_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addTransaction = (req, res) => {
    //const { vendor_id, customer_id, quantity, product_id } = req.body;
    const values = [req.body.vendor_id, req.body.customer_id, req.body.quantity, req.body.product_id, req.body.name, req.body.details, req.body.date_added, req.body.for_sale, req.body.vendor_quantity, req.body.photo, req.body.product_type, req.body.product_category, req.body.price, req.body.image_url];
    pool.query(queries.addTransaction, values, (error, results) => {
        if (error) { }
        else res.status(200).json(results.rows);

    })
}

const getTransactionInCartByProdID = (req, res) => {
    //const { vendor_id, customer_id, quantity, product_id } = req.body;
    const product_id = req.params.id;
    pool.query(queries.getTransactionInCartByProdID, [product_id], (error, results) => {
        if (error) throw error
        else { res.status(200).json(results.rows) };

    })
}

const getTransactionsByVendorID = (req, res) => {
    //const { vendor_id, customer_id, quantity, product_id } = req.body;
    const vendor_id = req.params.id;
    pool.query(queries.getTransactionsByVendorID, [vendor_id], (error, results) => {
        if (error) throw error
        else { res.status(200).json(results.rows) };

    })
}

const deleteTransaction = (req, res) => {
    console.log("id: " + req.params.id);
    const transaction_id = req.params.id;
    pool.query(queries.deleteTransaction, [transaction_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

//send null for values not being updated
const updateTransaction = (req, res) => {
    const values = [req.body.transaction_id, req.body.quantity, req.body.is_reserved, req.body.in_cart];
    console.log(req.body.transaction_id);
    /*
    if (req.body.quantity != null) {
        pool.query(queries.updateTransactionQuantity, [req.body.transaction_id, req.body.quantity], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    }
    if (req.body.in_cart != null) {
        pool.query(queries.updateTransactionInCart, [req.body.transaction_id, req.body.in_cart], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    }
    if (req.body.is_reserved != null) {
        pool.query(queries.updateTransactionReserve, [req.body.transaction_id, req.body.is_reserved], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    }
    */
    pool.query(queries.updateTransaction, values, (error, results) => {
        if (error) { }
        else res.status(200).json(results.rows);
    })



}

const addPastTransaction = (req, res) => {
    const values = [req.body.vendor_id, req.body.customer_id, req.body.quantity, req.body.product_id, req.body.name, req.body.details, req.body.date_added, req.body.for_sale, req.body.vendor_quantity, req.body.photo, req.body.product_type, req.body.product_category, req.body.price, req.body.image_url];
    pool.query(queries.addPastTransaction, values, (error, results) => {
        if (error) throw error
        else res.status(200).json(results.rows);

    })
}

const getPastCustomerTransaction = (req, res) => {
    const customer_id = req.params.id;
    pool.query(queries.getPastCustomerTransaction, [customer_id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows);
    })
}

const getPastVendorTransaction = (req, res) => {
    const vendor_id = req.params.id;
    pool.query(queries.getPastVendorTransaction, [vendor_id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows);
    })
}

const completePastTransaction = (req, res) => {
    pool.query(queries.completePastTransaction, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows);
    })
}

module.exports = {
    completePastTransaction,
    addPastTransaction,
    getPastCustomerTransaction,
    getPastVendorTransaction,
    addTransaction,
    getTransactionInCartByProdID,
    getTransactionsByVendorID,
    updateTransaction,
    getCustomerCart,
    getCustomerCurrentOrders,
    getVendorReserveRequests,
    getVendorReserves,
    deleteTransaction
}