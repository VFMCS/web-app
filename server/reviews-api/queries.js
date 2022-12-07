const createReview = "INSERT INTO reviews (rating, reviewer, reviewee, review) VALUES ($1,$2,$3,$4)";
const getReviewByID = "SELECT * FROM reviews WHERE review_id = $1";
const getReviewByReviewer = "SELECT * FROM reviews WHERE reviewer = $1";
const getReviewByReviewee = "SELECT * FROM reviews WHERE reviewee = $1";
const deleteReviewByID = "DELETE FROM reviews WHERE review_id = $1";


module.exports = {
    createReview,
    getReviewByID,
    getReviewByReviewer,
    getReviewByReviewee,
    deleteReviewByID
}