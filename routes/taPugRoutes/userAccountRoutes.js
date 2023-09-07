const router = require("express").Router();

const userAccounts = require("../../controllers/ta_PugControllers/appControllers/userAccountControllers");
const { ensureAuthenticated } = require('../../auth/auth');

/// Admin ///
router
  .route("/myProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfile);
router
  .route("/myProfileSettings/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfileSettings);
router
  .route("/updateMyProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateMyProfileSettings);
router
  .route("/updateMyProfileDB/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfileSettingsDB)
  .post(ensureAuthenticated, userAccounts.updateMyProfileSettingsDB);
router
  .route("/updateMyPassword/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateMyPassword);

  /// Admin/Member Area ///
router
  .route("/userMemberDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderUserMemberDatabase)
router
  .route("/userUpdateMemberDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderUserMemberDatabase)
  .post(ensureAuthenticated, userAccounts.userUpdateMemberDatabase);
router
  .route("/userDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderUserDatabase)
  .post(ensureAuthenticated, userAccounts.updateUserDatabase);

  /// Members ///
router
  .route("/memberProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfile);
router
  .route("/memberProfileSettings/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettings);
router
  .route("/updateMemberProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateMemberProfileSettings);
router
  .route("/updateMemberPassword/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateMemberPassword);
router
  .route("/deleteMember/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettings)
  .post(ensureAuthenticated, userAccounts.deleteMember);

  /// Member Database ///
router
  .route("/memberProfileSettingsDB/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettingsDB);
router
  .route("/updateMemberProfileDB/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettingsDB)
  .post(ensureAuthenticated, userAccounts.updateMemberProfileSettingsDB);
router
  .route("/memberDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberDatabase)
  .post(ensureAuthenticated, userAccounts.updateMemberDatabase);
  /// Deletes From Database ///
router
  .route("/updateMemberDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberDatabase)
  .post(ensureAuthenticated, userAccounts.updateMemberDatabase);

  /// Students ///
router
  .route("/studentAnswers/:id")
  .get(ensureAuthenticated, userAccounts.renderStudentAnswers);
router
  .route("/updateStudentAnswer/:id")
  .get(ensureAuthenticated, userAccounts.renderStudentAnswers)
  .post(ensureAuthenticated, userAccounts.updateStudentAnswer);
router
  .route("/deleteStudentAnswers/:id")
  .get(ensureAuthenticated, userAccounts.deleteStudentAnswers)
  .post(ensureAuthenticated, userAccounts.deleteStudentAnswers);

  /// Vendor Routes
router
  .route("/vendorDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderVendorDatabase)
router
  .route("/updateVendorProfileDB/:id")
  .get(ensureAuthenticated, userAccounts.renderVendorProfileSettingsDB)
  .post(ensureAuthenticated, userAccounts.updateVendorProfileSettingsDB);
  /// Deletes Vendor
router
  .route("/updateVendorDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderVendorDatabase)
  .post(ensureAuthenticated, userAccounts.updateVendorDatabase);

module.exports = router;