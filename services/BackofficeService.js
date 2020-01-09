/* eslint-disable no-unused-vars */
const Service = require('./Service');

class BackofficeService {

  /**
   * Sync all completed DSTs on Alfresco
   *
   * id String the value of the unique id.
   * returns AlfrescoSync
   **/
  static organizationIdAlfrescoSyncGet({ id }) {
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
   * Sync all completed DSTs on Alfresco
   *
   * id String the value of the unique id.
   * body AlfrescoSync Domain associated to the account.
   * no response value expected for this operation
   **/
  static organizationIdAlfrescoSyncPost({ id, body }) {
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
   * Enable or disable an Organization account.
   * Enable or disable an Organization.
   *
   * id String the value of the unique id.
   * enabled Boolean New status to set (optional)
   * no response value expected for this operation
   **/
  static organizationIdDELETE({ id, enabled }) {
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
   * Retrieve info on one organization
   *
   * id String the value of the unique id.
   * returns Organization
   **/
  static organizationIdGet({ id }) {
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
   * Retrieve public resources
   *
   * res String resource id
   * id String organization id (optional)
   * returns File
   **/
  static organizationIdPublicGet({ res, id }) {
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
   * Update info on one organization
   *
   * id String the value of the unique id.
   * payload Organization  (optional)
   * no response value expected for this operation
   **/
  static organizationIdPut({ id, payload }) {
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
   * Get an organization resource
   * Get an organization resource
   *
   * id String the value of the unique id.
   * resPath String 
   * returns File
   **/
  static organizationIdResourceGET({ id, resPath }) {
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
   * Create or overwrite an organization resource
   * Create or overwrite an organization resource
   *
   * id String the value of the unique id.
   * resPath String 
   * file File The file to upload.
   * no response value expected for this operation
   **/
  static organizationIdResourcePUT({ id, resPath, file }) {
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
   * Delete an organization resource
   * Deletes a Resource.
   *
   * id String the value of the unique id.
   * resPath String 
   * no response value expected for this operation
   **/
  static organizationResourceIdDelete({ id, resPath }) {
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
   * List all the organization resources
   * List all the organization resources.
   *
   * id String the value of the unique id.
   * returns List
   **/
  static organizationResourcesGet({ id }) {
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
   * Retrieve organization tags
   *
   * returns List
   **/
  static organizationTagsGet() {
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
   * Get the list of organizations
   * Get the list of organizations
   *
   * Dollartop Integer A number of results to return. Applied after $skip. (optional)
   * Dollarskip Long An offset into the collection. (optional)
   * Dollarcount Boolean if true, the server includes the count of all items in the response. (optional)
   * Dollarfilter String A filter definition (eg. $filter=name == 'Milk' or surname == 'Bread') (optional)
   * returns OrganizationsGetResponse
   **/
  static organizationsGet({ Dollartop, Dollarskip, Dollarcount, Dollarfilter }) {
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
   * Create a new organization
   *
   * payload Organization  (optional)
   * no response value expected for this operation
   **/
  static organizationsPost({ payload }) {
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

module.exports = BackofficeService;
