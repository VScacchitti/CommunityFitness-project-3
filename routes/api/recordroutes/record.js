const router = require("express").Router();
const recordController = require("../../../controllers/recordController");

// Matches with "/api/record"
router.route("/")
  .get(recordController.findAll)
  .post(recordController.create);

// Matches with "/api/record/:id"
router.route("/:id")
  .get(recordController.findById)
  .put(recordController.update)
  .delete(recordController.remove);

//Queries to get by name
router.route("/:name")
  .get(recordController.findByName)


module.exports = router;