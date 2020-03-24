const Controller = require('./Controller');

class Bit4idPathgroupNotificationsController {
  constructor(Service) {
    this.service = Service;
  }

  async notificationsDstIdDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.notificationsDstIdDELETE);
  }

  async notificationsDstsGET(request, response) {
    await Controller.handleRequest(request, response, this.service.notificationsDstsGET);
  }

  async notificationsPushTokenDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.notificationsPushTokenDELETE);
  }

  async notificationsPushTokenPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.notificationsPushTokenPOST);
  }

}

module.exports = Bit4idPathgroupNotificationsController;
