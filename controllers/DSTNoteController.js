const Controller = require('./Controller');

class DSTNoteController {
  constructor(Service) {
    this.service = Service;
  }

  async dSTIdNoteGET(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdNoteGET);
  }

  async dSTIdNoteNoteIdDELETE(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdNoteNoteIdDELETE);
  }

  async dSTIdNoteNoteIdPUT(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdNoteNoteIdPUT);
  }

  async dSTIdNotePOST(request, response) {
    await Controller.handleRequest(request, response, this.service.dSTIdNotePOST);
  }

}

module.exports = DSTNoteController;
