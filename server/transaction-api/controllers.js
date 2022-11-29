//const { PoolOutlined } = require("@mui/icons-material")
const pool = require("../db/db.js").pool;
const queries = require("./queries.js")

const getCustomerCart = (req, res) => {
    const customer_id = req.params.id;
    pool.query(queries.getCustomerCart, [customer_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addTransaction = (req, res) => {
    const { vendor_id, customer_id, quantity, product_id } = req.body;
    pool.query(queries.addTransaction, [vendor_id, customer_id, quantity, product_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const updateTransaction = (req, res) => {
    const { transaction_id, quantity, isInCart, isReserved } = req.body;
    if (isInCart != null) {
        pool.query(queries.updateQuantity, [quantity, transaction_id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    }

}

module.exports = {
    addTransaction,
    updateTransaction,
    getCustomerCart,
}