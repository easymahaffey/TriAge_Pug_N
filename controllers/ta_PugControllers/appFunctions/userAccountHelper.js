const User = require("../../../db/models/ta_PugModels/User");
const Member = require("../../../db/models/ta_PugModels/Member");
const Vendor = require("../../../db/models/ta_PugModels/Vendor");
const Student = require("../../../db/models/ta_PugModels/Student");
const bcrypt = require("bcryptjs");

const adminProfile = (pageToRender, req, res) => {
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
      let {
        password,
        name,
        id,
        email,
        date,
        loggedIn,
        city,
        state,
        zipcode,
        privacy,
        userLevel,
      } = data;
      res.render(pageToRender, {
        password,
        name,
        id,
        email,
        date,
        loggedIn,
        city,
        state,
        zipcode,
        privacy,
        userLevel,
      });
    });
  }
};
const updateAdminProfile = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let reqBody = req.body;
    let loggedIn = req.params.loggedIn;
    let { name, email, city, state, zipcode, privacy, userLevel } = reqBody;
    const newData = {};
    Object.entries(reqBody)
      .filter(([, value]) => value !== "")
      .forEach(([key, value]) => (newData[key] = value));
    User.findByIdAndUpdate(
      { _id: id },
      { $set: newData },
      { new: true },
      (err, data) => {
        if (err) {
          console.log(err);
          if (err) {
            let message =
              "This email is already registered. Please select a new e-mail.";
            res.render("my-profileSettings", { message });
          }
        }
        let message = "You have successfully updated your profile.";
        res.redirect(pageToRender + id);
      }
    );
  }
}
const updateAdminPassword = (pageToRender, req, res) => {
  let { email, password1, password2 } = req.body;
  let reqBody = req.body;
  if (password1 === password2) {
    User.findOne({ email }, async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        let password = password1;
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        password = hashedPassword;
        id = data.id;
        User.findByIdAndUpdate(
          { _id: id },
          { $set: { password: password } },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
            }
            res.redirect(pageToRender + id);
          }
        );
      }
    });
  } else {
    let passwordMessage = "The passwords do not match each other";
    res.render("updateMyProfile", { passwordMessage });
  }
}
const adminMemberDatabase = (pageToRender, req, res) => {
  let id = req.params.id;
  let value = 0;
  let adminID = id;
  User.findById({ _id: adminID }, (err, userData) => {
    if (err) {
      console.log(err);
    }
    Member.find({ __v: value })
      .sort({ name: "asc" })
      // .limit(10)
      .exec((err, memberData) => {
        if (err) {
          console.log(err);
          done(null, memberData);
        }
        /// reset id to req.params.id for passport/routes
        loggedIn = userData.loggedIn;
        userLevel = userData.userLevel;
        id = userData.id;
        let name = userData.name;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          name,
          loggedIn,
          userLevel,
          members: memberData,
          message,
        });
      });
  });
}
const adminDatabase = (pageToRender, req, res) => {
  let id = req.params.id;
  let value = 0;
  let adminID = id;
  User.findById({ _id: adminID }, (err, data) => {
    if (err) {
      console.log(err);
    }
    User.find({ __v: value })
      .sort({ name: "asc" })
      // .limit(10)
      .exec((err, userData) => {
        if (err) {
          console.log(err);
          done(null, userData);
        }
        /// reset id to req.params.id for passport/routes
        loggedIn = data.loggedIn;
        userLevel = data.userLevel;
        id = data.id;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          loggedIn,
          userLevel,
          users: userData,
          message,
        });
      });
  });
}
const adminDeleteMember = (pageToRender, req, res) => {
  let id = req.params.id;
  let adminID = req.body.adminID;
  Member.findByIdAndRemove({ _id: id }, { new: true }, async (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!data) {
      let errorMessage = "This profile does not exist.";
      res.json({ message: errorMessage });
    }
    res.redirect(pageToRender + adminID);
  });
}

const memberProfile = (pageToRender, req, res) => {
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
      let {
        first_name,
        last_name,
        id,
        password,
        date_member_joined,
        loggedIn,
        time_as_member,
        email,
        phone,
        current_project,
        address1,
        address2,
        city,
        state,
        zipCode,
        privacy,
        date_of_birth,
        membership_status,
        membership_role,
        member_student_status,
      } = data;
      res.render(pageToRender, {
        first_name,
        last_name,
        id,
        password,
        date_member_joined,
        loggedIn,
        time_as_member,
        email,
        phone,
        current_project,
        address1,
        address2,
        city,
        state,
        zipCode,
        privacy,
        date_of_birth,
        membership_status,
        membership_role,
        member_student_status,
      });
    });
  }
}
const updateMemberProfile = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let reqBody = req.body;
    let loggedIn = req.params.loggedIn;
    let {
      first_name,
      last_name,
      date_member_joined,
      time_as_member,
      email,
      phone,
      current_project,
      address1,
      address2,
      city,
      state,
      zipCode,
      privacy,
      date_of_birth,
      membership_status,
      membership_role,
    } = reqBody;
    const newData = {};
    Object.entries(reqBody)
      .filter(([, value]) => value !== "")
      .forEach(([key, value]) => (newData[key] = value));
    Member.findByIdAndUpdate(
      { _id: id },
      { $set: newData },
      { new: true },
      (err, data) => {
        if (err) {
          console.log(err);
          if (err) {
            let message =
              "This email is already registered. Please select a new e-mail.";
            res.render("member-profileSettings", { message });
          }
        }
        let message = "You have successfully updated your profile.";
        res.redirect(pageToRender + id);
      }
    );
  }
}
const updateMemberPassword = (pageToRender, req, res) => {
  let { email, password1, password2 } = req.body;
  if (password1 === password2) {
    Member.findOne({ email }, async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        let password = password1;
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        password = hashedPassword;
        id = data.id;
        Member.findByIdAndUpdate(
          { _id: id },
          { $set: { password: password } },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
            }
            res.redirect(pageToRender + id);
          }
        );
      }
    });
  } else {
    let passwordMessage = "The passwords do not match each other";
    res.render("updateMemberProfile", { passwordMessage });
  }
}
const deleteMember = (pageToRender, req, res) => {
  let id = req.params.id;
  Member.findByIdAndRemove({ _id: id }, { new: true }, async (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!data) {
      let errorMessage = "This profile does not exist.";
      res.json({ message: errorMessage });
    }
    res.redirect(pageToRender);
  });
}
const memberDatabase = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, data) => {
      if (err) {
        console.log(err);
      }
      Member.find({ __v: value })
        .sort({ name: "asc" })
        // .limit(10)
        .exec((err, memberData) => {
          if (err) {
            console.log(err);
            done(null, memberData);
          }
          /// reset id to req.params.id for passport/routes
          loggedIn = data.loggedIn;
          membership_role = data.membership_role;
          membership_status = data.membership_status;
          id = data.id;
          first_name = data.first_name;
          last_name = data.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render(pageToRender, {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            membership_role,
            membership_status,
            members: memberData,
            message,
          });
        });
    });
  }
}


const studentAnswers = (pageToRender, req, res) => {
  let member_id = req.params.id;
  if (member_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    student_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      loggedIn = true;
      let studentId = memberData.member_student_id
      Student.findById({ _id: studentId }, (err, studentData) => {
        if (err) {
          console.log(err);
        }
        if (!studentData) {
          let message =
            "You have not registered as a student. Please register for TriAge Challenge.";
          loggedIn = true;
          let id = member_id;
          res.redirect("/registerStudent/" + id);
        } else {
          let studentAnswers = studentData.answers 
          let sortedAnswers = Object.values(studentAnswers).sort((a, b) => {
            const questionA = a.questionTitle.toUpperCase()
            const questionB = b.questionTitle.toUpperCase()
            if (questionA < questionB) {
              return -1;
            }
            if (questionA > questionB) {
              return 1;
            }
            return 0
          })
          id = memberData._id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          loggedIn = memberData.loggedIn;
          membership_role = memberData.membership_role;
          member_student_role = memberData.member_student_role;
          member_student_status = memberData.member_student_status;
          let member_student_id = memberData.member_student_id;
          student_status = studentData.student_status;
          let message = "TESTING DATA OUTPUT";
          res.render(pageToRender, {
            id,
            first_name,
            last_name,
            member_student_id,
            member_student_role,
            student_status,
            loggedIn,
            membership_role,
            answers: sortedAnswers,
            message,
          });
        }
      });
    });
  }
}
const updateStudentAnswer = (pageToRender, req, res) => {
  let memberId = req.user._id.toString();
  let studentId = req.user.member_student_id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let reqBody = req.body;
    let {
      id,
      questionGroupModule,
      questionModule,
      questionTitle,
      questionNumber,
      questionText,
      answerTime,
      answerText,
      answerCheckbox,
    } = reqBody;
    Student.findById({ _id: studentId }, (err, data) => {
      if (err) {
        console.log(err);
      }
      let newAnswer = {
        id,
        answerDate: new Date,
        questionGroupModule,
        questionModule,
        questionTitle,
        questionNumber,
        questionText,
        answerTime,
        answerText,
        answerCheckbox,
      };

      for (let i = 0; i < data.answers.length; i++) {
        let dataAnswerId = data.answers[i]._id.toString()
        if (newAnswer.id === dataAnswerId && newAnswer.id !== undefined) {
          const newData = data.answers[i];
          Object.entries(newAnswer)
            .filter(([, value]) => value !== undefined)
            .forEach(([key, value]) => (newData[key] = value));
          Student.findByIdAndUpdate(
            { _id: studentId },
            { $set: { answers: data.answers } },
            { new: true },
            (err) => {
              if (err) {
                console.log(err)
              }
              let message = "You have successfully updated your answers.";
              res.redirect(pageToRender + memberId);
            })
        }
      }
    })
  }
}
const deleteStudentAnswer = (pageToRender, req, res) => {
  let answer_id = req.params.id;
  Member.findById(id, (err, memberData) => {
    if (err) {
      console.log(err);
    }
    let student_id = memberData.member_student_id;
    Student.findById({ _id: student_id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      let newAnswers = data.answers.filter(
        (answer) => answer.id !== answer_id
      );
      Student.findByIdAndUpdate(
        { _id: student_id },
        { $set: { answers: newAnswers } },
        { new: true },
        (err, data) => {
          if (err) {
            console.log(err);
          }
          Student.find({ answers: data.answers })
            .sort({ questionTitle: "asc" })
            // .limit(10)
            .exec((err, data) => {
              if (err) {
                console.log(err);
                done(null, data);
              }
              res.redirect(pageToRender + id);
            });
        }
      );
    });
  });
}

const vendorProfileSettingsDB = (pageToRender, req, res) => {
  let vendor_id = req.params.id;
  // let loggedIn = req.params.loggedIn;
  // let membership_role = req.params.membership_role;
  // let userLevel = req.params.userLevel;
  if (vendor_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Vendor.findById({ _id: vendor_id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      let {
        organization_name,
        org_branch,
        serviceDate,
        password,
        // loggedIn,
        vendor_status,
        membership_role,
        membership_status,
        member_id,
        org_email,
        org_website,
        org_phone,
        org_phone_ext,
        org_alt_phone,
        org_cell_phone,
        org_fax,
        poc_first_name,
        poc_last_name,
        poc_title,
        alt_poc_first_name,
        alt_poc_last_name,
        alt_poc_title,
        alt_poc_phone,
        alt_poc_email,
        address1,
        address2,
        city,
        State,
        zipCode,
        mail_address1,
        mail_address2,
        mail_city,
        mail_State,
        mail_zipCode,
        eligibility,
        custody_level,
        adoc_approved,
        ahcccs_approved,
        azrha_approved,
        info,
        service,
        service_type,
        service_category,
        service_source,
        veterans_services,
      } = data;
      let id = data._id;
      res.render(pageToRender, {
        loggedIn,
        id,
        organization_name,
        org_branch,
        serviceDate,
        password,
        vendor_status,
        membership_role,
        membership_status,
        member_id,
        org_email,
        org_website,
        org_phone,
        org_phone_ext,
        org_alt_phone,
        org_cell_phone,
        org_fax,
        poc_first_name,
        poc_last_name,
        poc_title,
        alt_poc_first_name,
        alt_poc_last_name,
        alt_poc_title,
        alt_poc_phone,
        alt_poc_email,
        address1,
        address2,
        city,
        State,
        zipCode,
        mail_address1,
        mail_address2,
        mail_city,
        mail_State,
        mail_zipCode,
        eligibility,
        custody_level,
        adoc_approved,
        ahcccs_approved,
        azrha_approved,
        info,
        service,
        service_type,
        service_category,
        service_source,
        veterans_services,
      });
    });
  }
}
const updateVendorProfileDB = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let reqBody = req.body;
    let loggedIn = true;
    let {
      organization_name,
      org_branch,
      serviceDate,
      password,
      vendor_status,
      membership_role,
      membership_status,
      member_id,
      org_email,
      org_website,
      org_phone,
      org_phone_ext,
      org_alt_phone,
      org_cell_phone,
      org_fax,
      poc_first_name,
      poc_last_name,
      poc_title,
      alt_poc_first_name,
      alt_poc_last_name,
      alt_poc_title,
      alt_poc_phone,
      alt_poc_email,
      address1,
      address2,
      city,
      State,
      zipCode,
      mail_address1,
      mail_address2,
      mail_city,
      mail_State,
      mail_zipCode,
      eligibility,
      custody_level,
      adoc_approved,
      ahcccs_approved,
      azrha_approved,
      info,
      service,
      service_type,
      service_category,
      service_source,
      veterans_services,
    } = reqBody;
    const newData = {};
    Object.entries(reqBody)
      .filter(([, value]) => value !== "")
      .forEach(([key, value]) => (newData[key] = value));
    Vendor.findByIdAndUpdate(
      { _id: id },
      { $set: newData },
      { new: true },
      (err, data) => {
        if (err) {
          console.log(err);
          if (err) {
            let message =
              "This email is already registered. Please select a new e-mail.";
            res.render("service-profileSettingsDB", { message });
          }
        }
        let message = "You have successfully updated your profile.";
        res.redirect(pageToRender + id);
      }
    );
  }
}
const vendorDatabase = (pageToRender, req, res) => {
  let id = req.params.id;
  let value = 0;
  let memberID = id;
  Member.findById({ _id: memberID }, (err, memberData) => {
    if (err) {
      console.log(err);
    }
    Vendor.find({ __v: value })
      .sort({ name: "asc" })
      // .limit(10)
      .exec((err, vendorData) => {
        if (err) {
          console.log(err);
          done(null, vendorData);
        }
        /// reset id to req.params.id for passport/routes
        loggedIn = memberData.loggedIn;
        membership_role = memberData.membership_role;
        member_student_role = memberData.member_student_role;
        membership_status = memberData.membership_status;
        id = memberData.id;
        first_name = memberData.first_name;
        last_name = memberData.last_name;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          memberID,
          first_name,
          last_name,
          loggedIn,
          membership_role,
          member_student_role,
          membership_status,
          vendors: vendorData,
          message,
        });
      });
  });
}
const deleteVendor = (pageToRender, req, res) => {
  let vendor_id = req.params.id;
  let adminID = req.body.adminID;
  Vendor.findByIdAndRemove(
    { _id: vendor_id },
    { new: true },
    async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (!data) {
        let errorMessage = "This profile does not exist.";
        res.json({ message: errorMessage });
      }
      res.redirect(pageToRender + adminID);
    }
  );
}

module.exports = {
  /// Admin ///
  myProfile: (req, res) => {
    adminProfile("my-profile", req, res);
  },
  myProfileSettings: (req, res) => {
    adminProfile("my-profileSettings", req, res);
  },
  updateMyProfile: (req, res) => {
    updateAdminProfile("/myProfileSettings/", req, res);
  },
  myProfileSettingsDB: (req, res) => {
    adminProfile("my-profileSettingsDB", req, res);
  },
  updateMyProfileDB: (req, res) => {
    updateAdminProfile("my-profileSettingsDB", req, res);
  },
  updateMyPassword: (req, res) => {
    updateAdminPassword("/myProfileSettings/", req, res);
  },

  userMemberDatabase: (req, res) => {
    adminMemberDatabase("member-database", req, res);
  },
  userUpdateMemberDatabase: (req, res) => {
    adminDeleteMember("/userMemberDatabase/", req, res);
  },
  userDatabase: (req, res) => {
    adminDatabase("user-database", req, res);
  },

  /// Members ///
  memberProfile: (req, res) => {
    memberProfile("member-profile", req, res);
  },
  memberProfileSettings: (req, res) => {
    memberProfile("member-profileSettings", req, res);
  },
  updateMemberProfile: (req, res) => {
    updateMemberProfile("/memberProfileSettings/", req, res);
  },
  updateMemberPassword: (req, res) => {
    updateMemberPassword("/memberProfileSettings/", req, res);
  },
  deleteMember: (req, res) => {
    deleteMember("/", req, res);
  },

  /// Member Database ///
  memberProfileSettingsDB: function (req, res) {
    memberProfile("member-profileSettingsDB", req, res);
  },
  updateMemberProfileDB: (req, res) => {
    updateMemberProfile("/memberProfileSettingsDB/", req, res);
  },
  memberDatabase: (req, res) => {
    memberDatabase("member-database", req, res);
  },
  updateMemberDatabase: (req, res) => {
    deleteMember("/memberDatabase/", req, res);
  },

  /// Student Answer Database ///
  studentAnswers: (req, res) => {
    studentAnswers("member-studentAnswers", req, res);
  },
  updateStudentAnswer: (req, res) => {
    updateStudentAnswer("/studentAnswers/", req, res);
  },
  deleteStudentAnswers: (req, res) => {
    deleteStudentAnswer("/studentAnswers/", req, res);
  },

  /// Vendor Database ///
  renderVendorProfileSettingsDB: function (req, res) {
    vendorProfileSettingsDB("service-profileSettingsDB", req, res);
  },
  updateVendorProfileDB: (req, res) => {
    updateVendorProfileDB("service-profileSettingsDB", req, res);
  },
  renderVendorDatabase: (req, res) => {
    vendorDatabase("service-database", req, res);
  },
  updateVendorDatabase: (req, res) => {
    deleteVendor("/vendorDatabase/", req, res);
  },

};
