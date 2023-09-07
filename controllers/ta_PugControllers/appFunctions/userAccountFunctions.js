const userAccountHelpers = require("./userAccountHelper");

module.exports = {
  /// Admin ///
  renderMyProfile: function (req, res) {
    userAccountHelpers.myProfile(req, res);
  },
  renderMyProfileSettings: function (req, res) {
    userAccountHelpers.myProfileSettings(req, res);
  },
  updateMyProfileSettings: function (req, res) {
    userAccountHelpers.updateMyProfile(req, res);
  },
  renderMyProfileSettingsDB: function (req, res) {
    userAccountHelpers.myProfileSettingsDB(req, res);
  },
  updateMyProfileSettingsDB: function (req, res) {
    userAccountHelpers.updateMyProfileDB(req, res);
  },
  updateMyPassword: function (req, res) {
    userAccountHelpers.updateMyPassword(req, res);
  },

  /// User/Admin Area ///
  renderUserMemberDatabase: function (req, res) {
    userAccountHelpers.userMemberDatabase(req, res);
  },
  updateUserMemberDatabase: function (req, res) {
    userAccountHelpers.updateUserMemberDatabase(req, res);
  },
  userUpdateMemberDatabase: function (req, res) {
    userAccountHelpers.userUpdateMemberDatabase(req, res);
  },
  renderUserDatabase: function (req, res, next) {
    userAccountHelpers.userDatabase(req, res, next);
  },
  updateUserDatabase: function (req, res) {
    userAccountHelpers.updateUserDatabase(req, res);
  },

    /// Members ///
  renderMemberProfile: function (req, res) {
    userAccountHelpers.memberProfile(req, res);
  },
  renderMemberProfileSettings: function (req, res) {
    userAccountHelpers.memberProfileSettings(req, res);
  },
  updateMemberProfileSettings: function (req, res) {
    userAccountHelpers.updateMemberProfile(req, res);
  },
  updateMemberPassword: function (req, res) {
      userAccountHelpers.updateMemberPassword(req, res);
    },
  deleteMember: function (req, res) {
    userAccountHelpers.deleteMember(req, res);
  },

    /// Member Database ///

  renderMemberProfileSettingsDB: function (req, res) {
    userAccountHelpers.memberProfileSettingsDB(req, res);
  },
  updateMemberProfileSettingsDB: function (req, res) {
    userAccountHelpers.updateMemberProfileDB(req, res);
  },
  renderMemberDatabase: function (req, res) {
    userAccountHelpers.memberDatabase(req, res);
  },
  updateMemberDatabase: function (req, res) {
    userAccountHelpers.updateMemberDatabase(req, res);
  },

  /// Student Database ///
  renderStudentAnswers: function (req, res) {
    userAccountHelpers.studentAnswers(req, res);
  },
  updateStudentAnswer: function (req, res) {
    userAccountHelpers.updateStudentAnswer(req, res);
  },
  deleteStudentAnswers: function (req, res) {
    userAccountHelpers.deleteStudentAnswers(req, res);
  },

  /// Vendor Database ///
  renderVendorDatabase: function (req, res) {
    userAccountHelpers.renderVendorDatabase(req, res);
  },
  renderVendorProfileSettingsDB: function (req, res) {
    userAccountHelpers.renderVendorProfileSettingsDB(req, res);
  },
  updateVendorProfileSettingsDB: function (req, res) {
    userAccountHelpers.updateVendorProfileDB(req, res);
  },
  /// Deletes Vendor
  updateVendorDatabase: function (req, res) {
    userAccountHelpers.updateVendorDatabase(req, res);
  },
}