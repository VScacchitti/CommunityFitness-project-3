const router = require("express").Router();
const measurementRoutes = require("./measurement");

// Record routes
router.use("/measurement", measurementRoutes);

module.exports = router;