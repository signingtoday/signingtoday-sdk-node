const Controller = require('./Controller');

class Bit4idPathgroupOrganizationsController {
  constructor(Service) {
    this.service = Service;
  }

  async get_organization(request, response) {
    await Controller.handleRequest(request, response, this.service.get_organization);
  }

  async patch_organization(request, response) {
    await Controller.handleRequest(request, response, this.service.patch_organization);
  }

}

module.exports = Bit4idPathgroupOrganizationsController;
