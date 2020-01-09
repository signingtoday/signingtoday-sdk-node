const Controller = require('./Controller');

class Bit4idPathgroupTokensController {
  constructor(Service) {
    this.service = Service;
  }

  async create_token(request, response) {
    await Controller.handleRequest(request, response, this.service.create_token);
  }

  async delete_token(request, response) {
    await Controller.handleRequest(request, response, this.service.delete_token);
  }

  async get_token(request, response) {
    await Controller.handleRequest(request, response, this.service.get_token);
  }

  async list_tokens(request, response) {
    await Controller.handleRequest(request, response, this.service.list_tokens);
  }

  async list_user_tokens(request, response) {
    await Controller.handleRequest(request, response, this.service.list_user_tokens);
  }

  async update_token(request, response) {
    await Controller.handleRequest(request, response, this.service.update_token);
  }

}

module.exports = Bit4idPathgroupTokensController;
