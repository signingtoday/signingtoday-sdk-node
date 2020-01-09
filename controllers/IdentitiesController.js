const Controller = require('./Controller');

class IdentitiesController {
  constructor(Service) {
    this.service = Service;
  }

  async associate_appearance(request, response) {
    await Controller.handleRequest(request, response, this.service.associate_appearance);
  }

  async associate_identity(request, response) {
    await Controller.handleRequest(request, response, this.service.associate_identity);
  }

  async create_token_from_identity(request, response) {
    await Controller.handleRequest(request, response, this.service.create_token_from_identity);
  }

  async delete_appearance(request, response) {
    await Controller.handleRequest(request, response, this.service.delete_appearance);
  }

  async delete_enrollment_request(request, response) {
    await Controller.handleRequest(request, response, this.service.delete_enrollment_request);
  }

  async delete_identity(request, response) {
    await Controller.handleRequest(request, response, this.service.delete_identity);
  }

  async get_enrollment_request(request, response) {
    await Controller.handleRequest(request, response, this.service.get_enrollment_request);
  }

  async get_identity(request, response) {
    await Controller.handleRequest(request, response, this.service.get_identity);
  }

  async list_enrollment_requests(request, response) {
    await Controller.handleRequest(request, response, this.service.list_enrollment_requests);
  }

  async list_identities(request, response) {
    await Controller.handleRequest(request, response, this.service.list_identities);
  }

  async list_user_enrollments(request, response) {
    await Controller.handleRequest(request, response, this.service.list_user_enrollments);
  }

  async list_user_identities(request, response) {
    await Controller.handleRequest(request, response, this.service.list_user_identities);
  }

  async request_enrollment(request, response) {
    await Controller.handleRequest(request, response, this.service.request_enrollment);
  }

}

module.exports = IdentitiesController;
