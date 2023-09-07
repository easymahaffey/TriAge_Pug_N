const userAccountFunctions = require('../appFunctions/userAccountFunctions');

module.exports = {
  renderMyProfile: userAccountFunctions.renderMyProfile,
  renderMyProfileSettings: userAccountFunctions.renderMyProfileSettings,
  updateMyProfileSettings: userAccountFunctions.updateMyProfileSettings,
  renderMyProfileSettingsDB: userAccountFunctions.renderMyProfileSettingsDB,
  updateMyProfileSettingsDB: userAccountFunctions.updateMyProfileSettingsDB,
  updateMyPassword: userAccountFunctions.updateMyPassword,

    /// Admin/Member Area ///
  renderUserMemberDatabase: userAccountFunctions.renderUserMemberDatabase,
  updateUserMemberDatabase: userAccountFunctions.updateUserMemberDatabase,
  userUpdateMemberDatabase: userAccountFunctions.userUpdateMemberDatabase,
  renderUserDatabase: userAccountFunctions.renderUserDatabase,
  updateUserDatabase: userAccountFunctions.updateUserDatabase,

    /// Members ///
  renderMemberProfile: userAccountFunctions.renderMemberProfile,
  renderMemberProfileSettings: userAccountFunctions.renderMemberProfileSettings,
  updateMemberProfileSettings: userAccountFunctions.updateMemberProfileSettings,
  updateMemberPassword: userAccountFunctions.updateMemberPassword,
  deleteMember: userAccountFunctions.deleteMember,

  /// Member Database ///
  renderMemberProfileSettingsDB: userAccountFunctions.renderMemberProfileSettingsDB,
  updateMemberProfileSettingsDB: userAccountFunctions.updateMemberProfileSettingsDB,
  renderMemberDatabase: userAccountFunctions.renderMemberDatabase,
  updateMemberDatabase: userAccountFunctions.updateMemberDatabase,

  /// Student Database ///
  renderStudentAnswers: userAccountFunctions.renderStudentAnswers,
  updateStudentAnswer: userAccountFunctions.updateStudentAnswer,
  deleteStudentAnswers: userAccountFunctions.deleteStudentAnswers,

  /// Vendor Database ///
  renderVendorDatabase: userAccountFunctions.renderVendorDatabase,
  renderVendorProfileSettingsDB: userAccountFunctions.renderVendorProfileSettingsDB,
  updateVendorProfileSettingsDB: userAccountFunctions.updateVendorProfileSettingsDB,
  updateVendorDatabase: userAccountFunctions.updateVendorDatabase,

}