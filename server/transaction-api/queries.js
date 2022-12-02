const addTransaction = "INSERT INTO transactions (vendor_id,customer_id,quantity,product_id,is_reserved,in_cart,name,details,date_added,for_sale,vendor_quantity, photo, product_type, product_category, price, image_url) VALUES ($1,$2,$3,$4,FALSE,TRUE,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)";
const updateQuantity = "UPDATE transactions SET quantity = $4 WHERE transaction_id = $1";

const getCustomerCart = "SELECT * FROM transactions WHERE customer_id = $1 AND in_cart = TRUE";
const getVendorOrders = "SELECT * FROM transactions WHERE vendor_id = $1 AND in_cart = TRUE";

const deleteTransaction = "DELETE FROM transactions WHERE transaction_id = $1";

module.exports = {
    addTransaction,
    updateQuantity,
    getCustomerCart,
    getVendorOrders,
    deleteTransaction,
}