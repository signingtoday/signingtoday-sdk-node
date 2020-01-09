const Controller = require('./Controller');

class SignatureTransactionsController {
  constructor(Service) {
    this.service = Service;
  }

  async cancel_DST(request, response) {
    await Controller.handleRequest(request, response, this.service.cancel_DST);
  }

  async create_DST(request, response) {
    await Controller.handleRequest(request, response, this.service.create_DST);
  }

  async delete_DST(request, response) {
    await Controller.handleRequest(request, response, this.service.delete_DST);
  }

  async get_DST(request, response) {
    await Controller.handleRequest(request, response, this.service.get_DST);
  }

  async get_document(request, response) {
    await Controller.handleRequest(request, response, this.service.get_document);
  }

  async list_DSTs(request, response) {
    await Controller.handleRequest(request, response, this.service.list_DSTs);
  }

}

module.exports = SignatureTransactionsController;
