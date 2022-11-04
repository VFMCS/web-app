const getUsers = "SELECT * FROM USERS";
const getUserFromID = (user_id) => (`SELECT * FROM USERS WHERE user_id = ${user_id}`);

module.exports = {
    getUsers,
    getUserFromID,
}