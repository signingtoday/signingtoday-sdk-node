const Controller = require('./Controller');

class Bit4idPathgroupRobotsController {
  constructor(Service) {
    this.service = Service;
  }

  async robotAuthenticationDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.robotAuthenticationDELETE);
  }

  async robotAuthenticationGET(request, response) {
    await Controller.handleRequest(request, response, this.service.robotAuthenticationGET);
  }

  async robotConfigurationGET(request, response) {
    await Controller.handleRequest(request, response, this.service.robotConfigurationGET);
  }

  async robotConfigurationPUT(request, response) {
    await Controller.handleRequest(request, response, this.service.robotConfigurationPUT);
  }

  async robotDSTsPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.robotDSTsPOST);
  }

  async robotIdInstantiatePOST(request, response) {
    await Controller.handleRequest(request, response, this.service.robotIdInstantiatePOST);
  }

}

module.exports = Bit4idPathgroupRobotsController;
