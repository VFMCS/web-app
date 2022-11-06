const productSearch = "SELECT * FROM products WHERE UPPER(CONCAT(name, '#', product_type, '#', product_category)) LIKE UPPER($1)";

module.exports = {
    productSearch,
}