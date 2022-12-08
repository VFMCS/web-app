//const { PoolOutlined } = require("@mui/icons-material")
const pool = require("../db/db.js").pool;
const queries = require("./queries.js")

const createReview = (req, res) => {
    const values = [
        req.body.rating,
        req.body.reviewer,
        req.body.reviewee,
        req.body.review,
        req.body.title,
        req.body.reviewer_first_name,
        req.body.product_name];
    pool.query(queries.createReview, values, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getReviewByID = (req, res) => {
    const review_id = req.params.id;
    pool.query(queries.getReviewByID, [review_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getReviewByReviewer = (req, res) => {
    const reviewer_id = req.params.id;
    pool.query(queries.getReviewByReviewer, [reviewer_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getReviewByReviewee = (req, res) => {
    const reviewee_id = req.params.id;
    pool.query(queries.getReviewByReviewee, [reviewee_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteReviewByID = (req, res) => {
    const review_id = req.params.id;
    pool.query(queries.deleteReviewByID, [review_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    createReview,
    getReviewByID,
    getReviewByReviewer,
    getReviewByReviewee,
    deleteReviewByID
}