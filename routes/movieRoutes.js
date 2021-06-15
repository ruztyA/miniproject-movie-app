const express = require("express");

const router = express.Router();
const { showMovie, findMovie } = require("../controllers/movieController");
const { roleUser } = require("../middleware/auth");

router.get("/home", showMovie);
router.get("/find", findMovie);


module.exports = router;
