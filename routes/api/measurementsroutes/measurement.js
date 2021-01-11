const router = require("express").Router();
const measurementController = require("../../../controllers/measurementController");

// Matches with "/api/measurement"
router.route("/")
  .get(measurementController.findAll)
  .post(measurementController.create);

// Matches with "/api/measurement/:id"
router.route("/:id")
  .get(measurementController.findById)
  .put(measurementController.update)
  .delete(measurementController.remove);

//Queries to get by name
router.route("/:name")
  .get(measurementController.findByName)


module.exports = router;