const Controller = require('./Controller');

class Bit4idPathgroupUsersController {
  constructor(Service) {
    this.service = Service;
  }

  async create_user(request, response) {
    await Controller.handleRequest(request, response, this.service.create_user);
  }

  async get_user(request, response) {
    await Controller.handleRequest(request, response, this.service.get_user);
  }

  async list_users(request, response) {
    await Controller.handleRequest(request, response, this.service.list_users);
  }

  async update_user(request, response) {
    await Controller.handleRequest(request, response, this.service.update_user);
  }

}

module.exports = Bit4idPathgroupUsersController;
