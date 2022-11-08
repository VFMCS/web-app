const getFarmers = "SELECT * FROM users WHERE is_vendor = true";
const getFarmerById = "SELECT * FROM USERS WHERE user_id = $1";

//const getVendorProducts = "SELECT * FROM products WHERE vendor_id = $1";

module.exports = {
    getFarmers,
    getFarmerById
    //getVendorProducts,
}