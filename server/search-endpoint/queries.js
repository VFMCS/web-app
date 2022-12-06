const productSearch = "SELECT * FROM products WHERE UPPER(CONCAT(name, '#', product_type, '#', product_category)) LIKE UPPER($1)";
const productSearchByVendorID = "SELECT * FROM products WHERE vendor_id= $1 AND UPPER(CONCAT(name, '#', product_type, '#', product_category)) LIKE UPPER($2)";

const returnAllProducts = "SELECT * FROM products";

const vendorSearch = "SELECT * FROM users WHERE is_vendor=TRUE AND UPPER(CONCAT(first_name, '#', last_name, '#', address, '#', about_me)) LIKE UPPER($1)";
const returnAllVendors = "SELECT * FROM users WHERE is_vendor=TRUE";

module.exports = {
    productSearch,
    returnAllProducts,
    productSearchByVendorID,
    vendorSearch,
    returnAllVendors
}