const router = require("express").Router();
const userRoutes = require("./user");

// Record routes
router.use("/user", userRoutes);

module.exports = router;