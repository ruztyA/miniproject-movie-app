const express = require("express");

const router = express.Router();
const { createReview, updateReview, getMovieReview, deleteReview, showReviews} = require("../controllers/reviewControllers");
const { roleUser} = require("../middleware/auth")

router.post("/post/review", roleUser, createReview);
router.put("/put/review/:id", roleUser, updateReview);
router.get("/allreviews", showReviews);
router.get("/get/review/:id", roleUser ,getMovieReview);
router.delete("/delete/reviews/:id", roleUser ,deleteReview);

module.exports = router;
