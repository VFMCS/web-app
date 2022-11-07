const getFarmers = "SELECT * FROM users WHERE is_vendor = true";
//const getVendorProducts = "SELECT * FROM products WHERE vendor_id = $1";

module.exports = {
    getFarmers,
    //getVendorProducts,
}