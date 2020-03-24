const Controller = require('./Controller');

class RobotController {
  constructor(Service) {
    this.service = Service;
  }

  async robotConfigurationPUT(request, response) {
    await Controller.handleRequest(request, response, this.service.robotConfigurationPUT);
  }

}

module.exports = RobotController;
