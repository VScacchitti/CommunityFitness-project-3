const router = require("express").Router();
const exerciseController = require("../../../controllers/exerciseController");

// Matches with "/api/exercise"
router.route("/")
  .get(exerciseController.findAll)
  .post(exerciseController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(exerciseController.findById)
  .put(exerciseController.update)
  .delete(exerciseController.remove);

//Queries to get by name
router.route("/:name")
  .get(exerciseController.findByName)

//Queries to get by Bodypart
  router.route("/:bodypart")
  .get(exerciseController.findByName)

module.exports = router;

