const projectFunctions = require('../appFunctions/projectFunctions');

module.exports = {

    renderRegisterProject: projectFunctions.renderRegisterProject,
    registerProject: projectFunctions.registerProject,

    /////////////////////////////////////
    ///////// TriAge AZ Projects ////////
    /////////////////////////////////////

    renderProjectAzPhoenix: projectFunctions.renderProjectAzPhoenix,
    renderSecureProjectAzPhoenix: projectFunctions.renderSecureProjectAzPhoenix,

    renderProjectAzTucson: projectFunctions.renderProjectAzTucson,
    renderSecureProjectAzTucson: projectFunctions.renderSecureProjectAzTucson,

    /////////////////////////////////////
    ///////// TriAge AZ Services ////////
    /////////////////////////////////////

    renderSecureArizonaServicesDatabase:
    projectFunctions.renderSecureArizonaServicesDatabase,

    renderSecureArizonaFoodCenters: projectFunctions.renderSecureArizonaFoodCenters,

    renderSecureArizonaFoodAssistance: projectFunctions.renderSecureArizonaFoodAssistance,

    renderSecureArizonaShelters: projectFunctions.renderSecureArizonaShelters,

    renderSecureArizonaTransitionalHousing: projectFunctions.renderSecureArizonaTransitionalHousing,
    
    renderSecureArizonaClothing: projectFunctions.renderSecureArizonaClothing,

    renderSecureArizonaVeteransClinics: projectFunctions.renderSecureArizonaVeteransClinics,
    
    renderSecureArizonaBehavioralHealthClinics: projectFunctions.renderSecureArizonaBehavioralHealthClinics,
    
    renderSecureArizonaHealthcareClinics: projectFunctions.renderSecureArizonaHealthcareClinics,
    
    renderSecureArizonaPeerRunOrganizations: projectFunctions.renderSecureArizonaPeerRunOrganizations,

    renderSecureArizonaPeerTrainingCenters: projectFunctions.renderSecureArizonaPeerTrainingCenters,


}