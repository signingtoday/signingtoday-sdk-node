/* eslint-disable no-unused-vars */
const Service = require('./Service');

class ResourcesService {

  /**
   * Retrieve all resources associated to a DST.
   * Retrieve all resources associated to a DST.
   *
   * id UUID the value of the unique id.
   * returns File
   **/
  static dSTIdResourcesGET({ id }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Appends a new resource to a DST.
   * Appends a new Resource to a DST.
   *
   * id UUID the value of the unique id.
   * file File The file to upload.
   * filename String Filename.
   * resourceType String 
   * title String User-defined title of the resource. (optional)
   * returns DigitalSignatureTransaction
   **/
  static dSTIdResourcesPATCH({ id, file, filename, resourceType, title }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Deletes a Resource
   * Deletes a Resource.
   *
   * id UUID the value of the unique id.
   * returns DigitalSignatureTransaction
   **/
  static dSTResourceIdDELETE({ id }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Retrieves a Resource
   * Retrieves a Resource.
   *
   * id UUID the value of the unique id.
   * returns File
   **/
  static resourceIdGET({ id }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Updates a Resource
   * Updates a Resource.
   *
   * id UUID the value of the unique id.
   * resource LFResource Resource replacing current object.
   * no response value expected for this operation
   **/
  static resourceIdPUT({ id, resource }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Deletes a user appearance resource.
   * Deletes an identity appearance resource.
   *
   * id UUID the value of the unique id.
   * identityId UUID 
   * no response value expected for this operation
   **/
  static userIdIdentityIdentityIdAppearanceDELETE({ id, identityId }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Download an identity appearance resource.
   * Get the identity appearance resource.
   *
   * id UUID the value of the unique id.
   * identityId UUID 
   * returns File
   **/
  static userIdIdentityIdentityIdAppearanceGET({ id, identityId }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Adds an appeareance to a user.
   * Adds an appeareance to a user.
   *
   * id UUID the value of the unique id.
   * identityId UUID 
   * file File The file to upload.
   * filename String Filename.
   * resourceType String 
   * title String User-defined title of the resource. (optional)
   * returns LFResource
   **/
  static userIdIdentityIdentityIdAppearancePOST({ id, identityId, file, filename, resourceType, title }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

}

module.exports = ResourcesService;
