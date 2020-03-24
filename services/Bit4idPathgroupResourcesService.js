/* eslint-disable no-unused-vars */
const Service = require('./Service');

class Bit4idPathgroupResourcesService {

  /**
   * Retrieve all resources associated to a DST
   * This API allows to retrieve all resources associated to a DST.
   *
   * id UUID The value of _the unique id_
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
   * Append a new resource to a DST
   * This API allows to append a new Resource to a DST.
   *
   * id UUID The value of _the unique id_
   * file File The file to upload
   * filename String The name of the file
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
   * Delete a Resource
   * This API allows to delete a Resource.
   *
   * id UUID The value of _the unique id_
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
   * Retrieve a Resource
   * This API allows to retrieve a Resource.
   *
   * id UUID The value of _the unique id_
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
   * Update a Resource
   * This API allows to update a Resource.
   *
   * id UUID The value of _the unique id_
   * lFResource LFResource Resource replacing current object.
   * no response value expected for this operation
   **/
  static resourceIdPUT({ id, lFResource }) {
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
   * Delete a user appearance resource.
   * This API allows to delete an identity appearance resource.
   *
   * id UUID The value of _the unique id_
   * identityId UUID The unique id of the _Identity_
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
   * Download an identity appearance resource
   * This API allows to get the identity appearance resource.
   *
   * id UUID The value of _the unique id_
   * identityId UUID The unique id of the _Identity_
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
   * Add a graphical appearance to a user's identity
   * This API allows to add a graphical appearance to the identity of a user.
   *
   * id UUID The value of _the unique id_
   * identityId UUID The unique id of the _Identity_
   * file File The path of the file to upload
   * filename String The name of the file
   * resourceType String The type of the resource
   * title String User-defined title of the resource (optional)
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

module.exports = Bit4idPathgroupResourcesService;
