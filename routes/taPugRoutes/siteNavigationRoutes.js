const router = require("express").Router();
const siteNavigation = require("../../controllers/ta_PugControllers/appControllers/siteNavigationControllers");
const { ensureAuthenticated } = require('../../auth/auth');

router
  .route("/company-profile")
  .get(siteNavigation.renderCompanyProfile);
router
  .route("/company-profile/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureCompanyProfile);
router
  .route("/admin-company-profile/:id")
  .get(ensureAuthenticated,siteNavigation.renderUserSecureCompanyProfile);
router
  .route("/company-events")
  .get(siteNavigation.renderCompanyEvents);
router
  .route("/company-events/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureCompanyEvents);
router
  .route("/admin-company-events/:id")
  .get(ensureAuthenticated,siteNavigation.renderUserSecureCompanyEvents);
router
  .route("/local-news")
  .get(siteNavigation.renderLocalNews);
router
  .route("/local-news/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureLocalNews);
router
  .route("/admin-local-news/:id")
  .get(ensureAuthenticated,siteNavigation.renderUserSecureLocalNews);
router
  .route("/national-news")
  .get(siteNavigation.renderNationalNews);
router
  .route("/national-news/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureNationalNews);
router
  .route("/admin-national-news/:id")
  .get(ensureAuthenticated,siteNavigation.renderUserSecureNationalNews);
router
  .route("/member-profile/:id")
  .get(ensureAuthenticated, siteNavigation.renderMemberProfile);

  ///////// TriAge /////////

router
  .route("/triage-help-you/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureHelpYou);
router
  .route("/triage-help-others/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureHelpOthers);

module.exports = router;
