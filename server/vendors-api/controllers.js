//const { PoolOutlined, ViewModuleSharp } = require("@mui/icons-material")
const pool = require("../db/db.js").pool;
const queries = require("./queries.js")

const getFarmers = (req, res) => {
    //console.log(req)
    pool.query(queries.getFarmers, (error, results) => {
        res.status(200).json(results.rows);
    })
}

const getFarmerById = (req, res) => {
    const user_id = req.params.user_id;
    //console.log(req)
    pool.query(queries.getFarmerById, [user_id], (error, results) => {
        console.log(results);
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const postFarmers = (req,res) => {
    const requestbody = {
        user_id: req.user_id,
        username: req.first_name,
        password: req.password,
        first_name: req.first_name,
        last_name: req.last_name,
        address:"",
        is_vendor: req.role === "farmer",
        photo:null,
        about_me:"",
        email: req.email,
        created_on: new Date(),
        image_url:"",
        role: req.role
    };
    res.json(requestbody);
}

module.exports = {
    getFarmers,
    getFarmerById
}