const Controller = require('./Controller');

class Bit4idPathgroupUsersController {
  constructor(Service) {
    this.service = Service;
  }

  async userIdDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.userIdDELETE);
  }

  async userIdGET(request, response) {
    await Controller.handleRequest(request, response, this.service.userIdGET);
  }

  async userIdIdentitiesGET(request, response) {
    await Controller.handleRequest(request, response, this.service.userIdIdentitiesGET);
  }

  async userIdPUT(request, response) {
    await Controller.handleRequest(request, response, this.service.userIdPUT);
  }

  async userIdRolePUT(request, response) {
    await Controller.handleRequest(request, response, this.service.userIdRolePUT);
  }

  async usersGET(request, response) {
    await Controller.handleRequest(request, response, this.service.usersGET);
  }

  async usersGroupsGET(request, response) {
    await Controller.handleRequest(request, response, this.service.usersGroupsGET);
  }

  async usersGroupsPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.usersGroupsPOST);
  }

  async usersPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.usersPOST);
  }

}

module.exports = Bit4idPathgroupUsersController;
