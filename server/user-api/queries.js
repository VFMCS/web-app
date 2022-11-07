const getUsers = "SELECT * FROM USERS";
const getUserByID = "SELECT * FROM USERS WHERE user_id = $1";
const createUser = "INSERT INTO users (username,password,first_name,last_name,address,is_vendor,about_me,email) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";
const deleteUser = "DELETE FROM users WHERE user_id = $1";

const getFarmers = "SELECT * FROM users WHERE is_vendor = true";

const checkExistingUsers = "SELECT u FROM users u WHERE u.username = $1 OR u.email = $2";

const getUserByEmailAndPassword = "Select u.user_id from users u WHERE u.email = $1 AND u.password = $2";

module.exports = {
    getUsers,
    getUserByID,
    createUser,
    deleteUser,
    checkExistingUsers,
    getUserByEmailAndPassword
}