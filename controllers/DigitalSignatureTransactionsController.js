const Controller = require('./Controller');

class DigitalSignatureTransactionsController {
  constructor(Service) {
    this.service = Service;
  }

  async dSTIdAuditGET(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdAuditGET);
  }

  async dSTIdDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdDELETE);
  }

  async dSTIdFillPATCH(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdFillPATCH);
  }

  async dSTIdGET(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdGET);
  }

  async dSTIdInstantiatePOST(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdInstantiatePOST);
  }

  async dSTIdNotifyPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdNotifyPOST);
  }

  async dSTIdPUT(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdPUT);
  }

  async dSTIdPublishPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdPublishPOST);
  }

  async dSTIdReplacePOST(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdReplacePOST);
  }

  async dSTIdSignDocIdSignIdGET(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdSignDocIdSignIdGET);
  }

  async dSTIdTemplatizePOST(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdTemplatizePOST);
  }

  async dSTsGET(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTsGET);
  }

  async dSTsPOST(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTsPOST);
  }

}

module.exports = DigitalSignatureTransactionsController;
