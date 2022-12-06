const { Router } = require('express');
const controller = require('./controllers.js');

const router = Router();

router.post("/", controller.createReview);
router.delete("/:id", controller.deleteReviewByID);
router.get("/review_id/:id", controller.getReviewByID);
router.get("/reviewer_id/:id", controller.getReviewByReviewer);
router.get("/reviewee_id/:id", controller.getReviewByReviewee);

module.exports = router;