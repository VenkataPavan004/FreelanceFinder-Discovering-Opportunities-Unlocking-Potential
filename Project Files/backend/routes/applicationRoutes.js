const express = require("express");
const {
  applyToProject,
  getAllApplications,          // ✅ NEW
  getApplicationsByProject,
  acceptApplication
} = require("../controllers/applicationController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, applyToProject);

// ✅ IMPORTANT — this must come BEFORE "/:projectId"
router.get("/", protect, getAllApplications);

router.get("/:projectId", protect, getApplicationsByProject);

router.put("/accept/:id", protect, acceptApplication);

// router.get("/my", protect, getMyApplications);


module.exports = router;
