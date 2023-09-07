const router = require("express").Router();
const seedController = require("../../controllers/ta_PugControllers/testControllers/seedController");

router.route("/install")
  .get(seedController.installation);

router.route("/seedProjects")
  .get(seedController.seedProjects);
  
router.route("/viewProjects")
  .get(seedController.viewProjects);

router.route("/seedMembers")
  .get(seedController.seedMembers);
  
router.route("/viewMembers")
  .get(seedController.viewMembers);
  
router.route("/seedUsers")
  .get(seedController.seedUsers);

router.route("/viewUsers")
  .get(seedController.viewUsers);

router.route("/seedTestVendors")
  .get(seedController.seedTestVendors);

router.route("/seedVendors")
  .get(seedController.seedVendors);

router.route("/viewVendors")
  .get(seedController.viewVendors);

module.exports = router;