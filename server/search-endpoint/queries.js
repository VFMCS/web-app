const productSearch = "SELECT * FROM products WHERE UPPER(CONCAT(name, '#', product_type, '#', product_category)) LIKE UPPER($1)";
const productSearchByVendorID = "SELECT * FROM products WHERE vendor_id= $1 AND UPPER(CONCAT(name, '#', product_type, '#', product_category)) LIKE UPPER($2)";

const returnAllProducts = "SELECT * FROM products";

module.exports = {
    productSearch,
    returnAllProducts,
    productSearchByVendorID
}