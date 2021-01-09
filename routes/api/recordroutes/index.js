const router = require("express").Router();
const recordRoutes = require("./record");

// Record routes
router.use("/record", recordRoutes);

module.exports = router;