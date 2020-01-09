const Controller = require('./Controller');

class SignaturesController {
  constructor(Service) {
    this.service = Service;
  }

  async create_channel(request, response) {
    await Controller.handleRequest(request, response, this.service.create_channel);
  }

  async decline_DST(request, response) {
    await Controller.handleRequest(request, response, this.service.decline_DST);
  }

  async perform_DST(request, response) {
    await Controller.handleRequest(request, response, this.service.perform_DST);
  }

  async perform_signature(request, response) {
    await Controller.handleRequest(request, response, this.service.perform_signature);
  }

  async perform_signature_with_session(request, response) {
    await Controller.handleRequest(request, response, this.service.perform_signature_with_session);
  }

}

module.exports = SignaturesController;
