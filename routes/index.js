
const path = require("path");
const router = require("express").Router();
const apiRoutes1 = require("./api/exerciseroutes");
const apiRoutes2 = require("./api/recordroutes");
const apiRoutes3 = require("./api/workoutroutes");
const apiRoutes4 = require("./api/weightroutes");

// API Routes
router.use("/api", apiRoutes1);
router.use("/api", apiRoutes2);
router.use("/api", apiRoutes3);
router.use("/api", apiRoutes4);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;