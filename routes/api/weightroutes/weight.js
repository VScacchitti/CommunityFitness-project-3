const router = require("express").Router();
const weightController = require("../../../controllers/weightController");

// Matches with "/api/weight"
router.route("/")
  .get(weightController.findAll)
  .post(weightController.create);

// Matches with "/api/record/:id"
router.route("/:id")
  .get(weightController.findById)
  .put(weightController.update)
  .delete(weightController.remove);

//Queries to get by name


module.exports = router;