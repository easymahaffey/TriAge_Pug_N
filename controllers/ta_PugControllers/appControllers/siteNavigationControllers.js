const siteNavigationFunctions = require('../appFunctions/siteNavigationFunctions');

module.exports = {
    renderCompanyProfile: siteNavigationFunctions.renderCompanyProfile,
    renderSecureCompanyProfile: siteNavigationFunctions.renderSecureCompanyProfile,
    renderUserSecureCompanyProfile: siteNavigationFunctions.renderUserSecureCompanyProfile,
    renderCompanyEvents: siteNavigationFunctions.renderCompanyEvents,
    renderSecureCompanyEvents: siteNavigationFunctions.renderSecureCompanyEvents,
    renderUserSecureCompanyEvents: siteNavigationFunctions.renderUserSecureCompanyEvents,
    renderLocalNews: siteNavigationFunctions.renderLocalNews,
    renderSecureLocalNews: siteNavigationFunctions.renderSecureLocalNews,
    renderUserSecureLocalNews: siteNavigationFunctions.renderUserSecureLocalNews,
    renderNationalNews: siteNavigationFunctions.renderNationalNews,
    renderSecureNationalNews: siteNavigationFunctions.renderSecureNationalNews,
    renderUserSecureNationalNews: siteNavigationFunctions.renderUserSecureNationalNews,
    renderMemberProfile: siteNavigationFunctions.renderMemberProfile,
    
    ///////// TriAge /////////

    renderSecureHelpYou: siteNavigationFunctions.renderSecureHelpYou,
    renderSecureHelpOthers: siteNavigationFunctions.renderSecureHelpOthers,

}