const Controller = require('./Controller');

class ResourcesController {
  constructor(Service) {
    this.service = Service;
  }

  async dSTIdResourcesGET(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdResourcesGET);
  }

  async dSTIdResourcesPATCH(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdResourcesPATCH);
  }

  async dSTResourceIdDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTResourceIdDELETE);
  }

  async resourceIdGET(request, response) {
    await Controller.handleRequest(request, response, this.service.resourceIdGET);
  }

  async resourceIdPUT(request, response) {
    await Controller.handleRequest(request, response, this.service.resourceIdPUT);
  }

  async userIdIdentityIdentityIdAppearanceDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.userIdIdentityIdentityIdAppearanceDELETE);
  }

  async userIdIdentityIdentityIdAppearanceGET(request, response) {
    await Controller.handleRequest(request, response, this.service.userIdIdentityIdentityIdAppearanceGET);
  }

  async userIdIdentityIdentityIdAppearancePOST(request, response) {
    await Controller.handleRequest(request, response, this.service.userIdIdentityIdentityIdAppearancePOST);
  }

}

module.exports = ResourcesController;
