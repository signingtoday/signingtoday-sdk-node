const Controller = require('./Controller');

class ServicesController {
  constructor(Service) {
    this.service = Service;
  }

  async authChangePasswordPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.authChangePasswordPOST);
  }

  async authPasswordLostGET(request, response) {
    await Controller.handleRequest(request, response, this.service.authPasswordLostGET);
  }

  async authPasswordResetGET(request, response) {
    await Controller.handleRequest(request, response, this.service.authPasswordResetGET);
  }

  async authPasswordResetPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.authPasswordResetPOST);
  }

  async authPasswordTokenGET(request, response) {
    await Controller.handleRequest(request, response, this.service.authPasswordTokenGET);
  }

  async authSamlPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.authSamlPOST);
  }

  async authUser(request, response) {
    await Controller.handleRequest(request, response, this.service.authUser);
  }

  async configurationGet(request, response) {
    await Controller.handleRequest(request, response, this.service.configurationGet);
  }

  async logoutUser(request, response) {
    await Controller.handleRequest(request, response, this.service.logoutUser);
  }

  async oauthTokenPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.oauthTokenPOST);
  }

  async pdfResourceIdThumbsGET(request, response) {
    await Controller.handleRequest(request, response, this.service.pdfResourceIdThumbsGET);
  }

  async serviceChangePasswordPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.serviceChangePasswordPOST);
  }

  async serviceUsersSyncPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.serviceUsersSyncPOST);
  }

}

module.exports = ServicesController;
