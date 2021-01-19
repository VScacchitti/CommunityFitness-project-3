
const path = require("path");
const router = require("express").Router();
const apiRoutes1 = require("./api/exerciseroutes");
const apiRoutes2 = require("./api/recordroutes");
const apiRoutes3 = require("./api/workoutroutes");
const apiRoutes4 = require("./api/weightroutes");
const apiRoutes5 = require("./api/measurementsroutes");
const apiRoutes6 = require("./api/userroutes");

// API Routes
router.use("/api", apiRoutes1);
router.use("/api", apiRoutes2);
router.use("/api", apiRoutes3);
router.use("/api", apiRoutes4);
router.use("/api", apiRoutes5);
router.use("/api", apiRoutes6);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;