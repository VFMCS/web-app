const addTransaction = "INSERT INTO transactions (vendor_id, customer_id, quantity, product_id, is_reserved, in_cart, name, details, date_added, for_sale, vendor_quantity, photo, product_type, product_category, price, image_url) VALUES ($1,$2,$3,$4,FALSE,TRUE,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)";
const getTransactionInCartByProdID = "SELECT * FROM transactions WHERE product_id = $1 AND in_cart=TRUE";
const updateTransaction = "UPDATE transactions SET quantity = $2, in_cart = $4, is_reserved = $3 WHERE transaction_id = $1";

const updateTransactionQuantity = "UPDATE transactions SET quantity = $2 WHERE transaction_id = $1";
const updateTransactionInCart = "UPDATE transactions SET in_cart = $2 WHERE transaction_id = $1";
const updateTransactionReserve = "UPDATE transactions SET is_reserved = $2 WHERE transaction_id = $1";

const getCustomerCart = "SELECT * FROM transactions WHERE customer_id = $1 AND in_cart = TRUE";
const getCustomerCurrentOrders = "SELECT * FROM transactions WHERE customer_id = $1 AND in_cart = FALSE";
// const getCustomerPastOrders = "SELECT * FROM transactions WHERE customer_id = $1 AND in_cart = FALSE AND is_reserved = FALSE";

const addPastTransaction = "INSERT INTO past_transactions (vendor_id, customer_id, quantity, product_id, is_reserved, in_cart, name, details, date_added, for_sale, vendor_quantity, photo, product_type, product_category, price, image_url) VALUES ($1,$2,$3,$4,FALSE,TRUE,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)";
const getPastCustomerTransaction = "SELECT * FROM past_transactions WHERE customer_id = $1";
const getPastVendorTransaction = "SELECT * FROM past_transactions WHERE vendor_id = $1";

const getVendorReserveRequests = "SELECT * FROM transactions WHERE vendor_id = $1 AND is_reserved=FALSE AND in_cart = FALSE";
const getVendorReserves = "SELECT * FROM transactions WHERE vendor_id = $1 AND is_reserved=TRUE AND in_cart = FALSE";
const deleteTransaction = "DELETE FROM transactions WHERE transaction_id = $1";

module.exports = {
    addPastTransaction,
    getPastCustomerTransaction,
    getPastVendorTransaction,
    addTransaction,
    getTransactionInCartByProdID,
    updateTransaction,
    updateTransactionQuantity,
    updateTransactionReserve,
    updateTransactionInCart,
    getCustomerCart,
    getCustomerCurrentOrders,
    getVendorReserveRequests,
    getVendorReserves,
    deleteTransaction,
}