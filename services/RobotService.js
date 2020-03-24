/* eslint-disable no-unused-vars */
const Service = require('./Service');

class RobotService {

  /**
   * Edit the Robot configuration
   * This API allows to edit the Robot configuration. 
   *
   * robotConfiguration RobotConfiguration RobotConfiguration.
   * username String The _username_ associated to the account (optional)
   * domain String The _domain_ associated to the account (optional)
   * no response value expected for this operation
   **/
  static robotConfigurationPUT({ robotConfiguration, username, domain }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

}

module.exports = RobotService;
