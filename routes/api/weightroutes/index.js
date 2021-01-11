const router = require("express").Router();
const weightRoutes = require("./weight");

// Record routes
router.use("/weight", weightRoutes);

module.exports = router;