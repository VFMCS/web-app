const getAllProducts = "SELECT * FROM products";
const insertProd = "INSERT INTO products (vendor_id, name, details, date_added, for_sale, quantity, price, photo, product_type, product_category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
const getProductByVendorID = "SELECT * FROM products WHERE vendor_id = $1";
//const insertProdByID = "INSERT INTO products (vendor_id, name, details, date_added, for_sale, quantity, price, photo, product_type, product_category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

module.exports = {
    getAllProducts,
    getProductByVendorID,
	insertProd,
    //insertProdByID
}
