const siteNavigationHelpers = require("./siteNavigationHelper");

module.exports = {
  renderCompanyProfile: function (req, res) {
    res.render("company-profile");
  },
  renderSecureCompanyProfile: function (req, res) {
    siteNavigationHelpers.secureCompanyProfile(req, res);
  },
  renderUserSecureCompanyProfile: function (req, res) {
    siteNavigationHelpers.userSecureCompanyProfile(req, res);
  },
  renderCompanyEvents: function (req, res) {
    res.render("company-events");
  },
  renderSecureCompanyEvents: function (req, res) {
    siteNavigationHelpers.secureCompanyEvents(req, res);
  },
  renderUserSecureCompanyEvents: function (req, res) {
    siteNavigationHelpers.userSecureCompanyEvents(req, res);
  },
  renderLocalNews: function (req, res) {
    res.render("local-news");
  },
  renderSecureLocalNews: function (req, res) {
    siteNavigationHelpers.secureLocalNews(req, res);
  },
  renderUserSecureLocalNews: function (req, res) {
    siteNavigationHelpers.userSecureLocalNews(req, res);
  },
  renderNationalNews: function (req, res) {
    res.render("national-news");
  },
  renderSecureNationalNews: function (req, res) {
    siteNavigationHelpers.secureNationalNews(req, res);
  },
  renderUserSecureNationalNews: function (req, res) {
    siteNavigationHelpers.userSecureNationalNews(req, res);
  },
  renderMemberProfile: function (req, res) {
    res.render("member-profile");
  },

  ///////// TriAge /////////
  
  renderSecureHelpYou: function (req, res) {
    siteNavigationHelpers.secureHelpYou(req, res);
  },
  renderSecureHelpOthers: function (req, res) {
    siteNavigationHelpers.secureHelpOthers(req, res);
  },

};
