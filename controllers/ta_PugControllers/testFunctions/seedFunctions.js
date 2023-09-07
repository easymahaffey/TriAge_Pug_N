const Member = require("../../../db/models/ta_PugModels/Member")
const User = require("../../../db/models/ta_PugModels/User")
const Vendor = require("../../../db/models/ta_PugModels/Vendor")
const Project = require("../../../db/models/ta_PugModels/Project")
const seedProjects = require("../../../db/data/seedProjects")
const seedMembers = require("../../../db/data/seedMembers")
const seedUsers = require("../../../db/data/seedUsers")
const seedVendors = require("../../../db/data/seedVendors")
const seedTestVendors = require("../../../db/data/seedVendorsTest")
const bcrypt = require("bcryptjs")

const seedDatabase = (dataToRender, modelToUse, req, res) => {
  const associatedSeeds = dataToRender.map(Seed => {
    Seed
    return Seed
    });    
    modelToUse.create(associatedSeeds, async (err, data) => {
      if (err) {
        console.log("Associated Seeds Error", err)
      } else {
        for (let i = 0; i < data.length; i++) {
          let password = "password"
          let salt = await bcrypt.genSalt(10);
              let hashedPassword = await bcrypt.hash(password, salt);
          modelToUse.findOneAndUpdate({ email: data[i].email }, { $set: { password: hashedPassword} }, { new: true }, (err, data) => {
            if (err) {
              console.log(err)
            } else {
              return
            }
          });
        }
        res.send("DB seeded.")
      }
    })
};

const viewDatabase = (modelToUse, req, res) => {
    modelToUse.find().exec((err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
};

module.exports = {
  install: (req, res) => {
    res.render("install");
  },
  seedProjectDatabase: (req, res) => {
    seedDatabase(seedProjects, Project, req, res);
  },
  viewProjectDatabase: (req, res) => {
    viewDatabase(Project, req, res);
  },
  seedMemberDatabase: (req, res) => {
    seedDatabase(seedMembers, Member, req, res);
  },
  viewMemberDatabase: (req, res) => {
    viewDatabase(Member, req, res);
  },
  seedUserDatabase: (req, res) => {
    seedDatabase(seedUsers, User, req, res);
  },
  viewUserDatabase: (req, res) => {
    viewDatabase(User, req, res);
  },
  seedVendorDatabase: (req, res) => {
    seedDatabase(seedVendors, Vendor, req, res);
  },
  seedTestVendorDatabase: (req, res) => {
    seedDatabase(seedTestVendors, Vendor, req, res);
  },
  viewVendorDatabase: (req, res) => {
    viewDatabase(Vendor, req, res);
  }
};