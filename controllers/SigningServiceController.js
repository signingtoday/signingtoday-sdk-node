const Controller = require('./Controller');

class SigningServiceController {
  constructor(Service) {
    this.service = Service;
  }

  async signServiceOpen(request, response) {
    await Controller.handleRequest(request, response, this.service.signServiceOpen);
  }

  async signServiceOpenId(request, response) {
    await Controller.handleRequest(request, response, this.service.signServiceOpenId);
  }

  async signatureIdPerformIdPost(request, response) {
    await Controller.handleRequest(request, response, this.service.signatureIdPerformIdPost);
  }

}

module.exports = SigningServiceController;
