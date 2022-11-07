const getAllProducts = "SELECT * FROM products";
const getProductByVendorID = "SELECT * FROM products WHERE vendor_id = $1";

module.exports = {
    getAllProducts,
    getProductByVendorID,
}