const User = require("../../../db/models/ta_PugModels/User");
const Member = require("../../../db/models/ta_PugModels/Member");

const renderMemberSecurePage = (pageToRender, req, res)=> {
  let id = req.params.id;
    if (id === "undefined") {
      loggedIn = false;
      userLevel = "";
      membership_role = "";
      res.redirect("/");
    } else {
      Member.findById({ _id: id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        data.loggedIn = true;
        data.save((err, data) => {
          if (err) {
            console.log(err);
          }
        });
        let {
          first_name,
          current_project,
          membership_role,
          member_student_status,
          loggedIn,
          _id,
        } = data;
        let id = _id;
        res.render(pageToRender, {
          first_name,
          current_project,
          membership_role,
          member_student_status,
          loggedIn,
          id,
        });
      });
    }
}
const renderAdminSecurePage = (pageToRender, req, res)=> {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    User.findById({ _id: id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      let { name, userLevel, loggedIn, _id } = data;
      let id = _id;
      res.render(pageToRender, {
        name,
        userLevel,
        loggedIn,
        id,
      });
    });
  }
}

module.exports = {
  secureCompanyProfile: (req, res) => {
    renderMemberSecurePage("company-profile", req, res);
  },
  userSecureCompanyProfile: (req, res) => {
    renderAdminSecurePage("company-profile", req, res);
  },
  secureCompanyEvents: (req, res) => {
    renderMemberSecurePage("company-events", req, res);
  },
  userSecureCompanyEvents: (req, res) => {
    renderAdminSecurePage("company-events", req, res);
  },
  secureLocalNews: (req, res) => {
    renderMemberSecurePage("local-news", req, res);
  },
  userSecureLocalNews: (req, res) => {
    renderAdminSecurePage("local-news", req, res);
  },
  secureNationalNews: (req, res) => {
    renderMemberSecurePage("national-news", req, res);
  },
  userSecureNationalNews: (req, res) => {
    renderAdminSecurePage("national-news", req, res);
  },

  ///////// TriAge /////////

  secureHelpYou: (req, res) => {
    renderMemberSecurePage("triage-help-you", req, res);
  },
  secureHelpOthers: (req, res) => {
    renderMemberSecurePage("triage-help-others", req, res);
  },

};
