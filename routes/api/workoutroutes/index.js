const router = require("express").Router();
const workoutRoutes = require("./workout");

// Workout routes
router.use("/workout", workoutRoutes);

module.exports = router;