//const { PoolOutlined } = require("@mui/icons-material")
const  pool = require("../db.js") 
const queries = require("./queries.js")
 
const getUsers = (req,res) => {
    pool.query(queries.getUsers,(error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUserByID = (req,res) => {
    const user_id = req.params.user_id;
    pool.query(queries.getUserByID,[user_id],(error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const createUser = (req,res) => {
    const {username,password,first_name,last_name,address,is_vendor,about_me,email} = req.body;
    pool.query(queries.checkExistingUsers,[password,email],(error,results)=>{
        if (results.rows.length){
            res.send("Username or email already in use")
        }
        pool.query(queries.createUser,[username,password,first_name,last_name,address,is_vendor,about_me,email],(error,results)=>{
            if (error) throw error;
            res.status(201).send("User created");
        })
    })
}

const deleteUser = (req,res) => {
    const user_id = req.params.user_id;
    pool.query(queries.deleteUser,[user_id],(error,results)=>{
        res.status(201).send("User deleted");
        })
}



module.exports = {
    getUsers,
    getUserByID,
    createUser,
    deleteUser,
}