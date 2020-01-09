const Controller = require('./Controller');

class BackofficeController {
  constructor(Service) {
    this.service = Service;
  }

  async organizationIdAlfrescoSyncGet(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationIdAlfrescoSyncGet);
  }

  async organizationIdAlfrescoSyncPost(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationIdAlfrescoSyncPost);
  }

  async organizationIdDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationIdDELETE);
  }

  async organizationIdGet(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationIdGet);
  }

  async organizationIdPublicGet(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationIdPublicGet);
  }

  async organizationIdPut(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationIdPut);
  }

  async organizationIdResourceGET(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationIdResourceGET);
  }

  async organizationIdResourcePUT(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationIdResourcePUT);
  }

  async organizationResourceIdDelete(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationResourceIdDelete);
  }

  async organizationResourcesGet(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationResourcesGet);
  }

  async organizationTagsGet(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationTagsGet);
  }

  async organizationsGet(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationsGet);
  }

  async organizationsPost(request, response) {
    await Controller.handleRequest(request, response, this.service.organizationsPost);
  }

}

module.exports = BackofficeController;
