const express = require("express");
const { createJob, getJobs } = require("../controllers/jobController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/", protect, createJob);
router.get("/", getJobs);

module.exports = router;