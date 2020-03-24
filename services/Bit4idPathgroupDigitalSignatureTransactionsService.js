/* eslint-disable no-unused-vars */
const Service = require('./Service');

class Bit4idPathgroupDigitalSignatureTransactionsService {

  /**
   * Retrieve the audit records associated to the DST
   * This API allows to retrieves the audit records associated to the DST.
   *
   * id UUID The value of _the unique id_
   * returns List
   **/
  static dSTIdAuditGET({ id }) {
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
   * Delete a DST
   * This API allows to delete a DST. Actually the DST is marked as deleted thus not displayed anymore into the organization, but it will still be present in the database.
   *
   * id UUID The value of _the unique id_
   * no response value expected for this operation
   **/
  static dSTIdDELETE({ id }) {
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
   * Fill a form of a DST
   * This API allows to fill a form of a DST.
   *
   * id UUID The value of _the unique id_
   * fillableForm FillableForm The form filled by the user.
   * returns DigitalSignatureTransaction
   **/
  static dSTIdFillPATCH({ id, fillableForm }) {
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
   * Retrieve a DST
   * This API allows to retrieve a DST.
   *
   * id UUID The value of _the unique id_
   * returns DigitalSignatureTransaction
   **/
  static dSTIdGET({ id }) {
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
   * Instantiate a DST from a template
   * This API allows to instantiate a DST from a template by specifying the template Id.
   *
   * id UUID The value of _the unique id_
   * returns DigitalSignatureTransaction
   **/
  static dSTIdInstantiatePOST({ id }) {
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
   * Modify a published DST template
   * This API allows to move a published DST to DRAFT, allowing the modification. This way is possible to modify a _DST Template_. 
   *
   * id UUID The value of _the unique id_
   * returns DigitalSignatureTransaction
   **/
  static dSTIdModifyPOST({ id }) {
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
   * Send notifications for a DST
   * This API allows to send notifications to pending users for an active _DST_.
   *
   * id UUID The value of _the unique id_
   * no response value expected for this operation
   **/
  static dSTIdNotifyPOST({ id }) {
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
   * Update a DST
   * This API allows to update a DST.
   *
   * id UUID The value of _the unique id_
   * digitalSignatureTransaction DigitalSignatureTransaction DST replacing current object.
   * returns DigitalSignatureTransaction
   **/
  static dSTIdPUT({ id, digitalSignatureTransaction }) {
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
   * Publish a DST
   * This API allows to publish a DST, the new state becomes published. It will automatically evolve to a new state where it will be filled or signed.
   *
   * id UUID The value of _the unique id_
   * returns DigitalSignatureTransaction
   **/
  static dSTIdPublishPOST({ id }) {
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
   * Replace a rejected DST
   * This API allows to replace a rejected DST instantiating a new one. The replacing DST is created in DRAFT state.
   *
   * id UUID The value of _the unique id_
   * returns DigitalSignatureTransaction
   **/
  static dSTIdReplacePOST({ id }) {
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
   * Return the address for signing
   * This API returns the address to perform the signature.
   *
   * id UUID The value of _the unique id_
   * docId Integer Reference to _docId_ has to be signed
   * signId Integer Reference to the signature request id
   * returns DSTSigningAddressResponse
   **/
  static dSTIdSignDocIdSignIdGET({ id, docId, signId }) {
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
   * Create a template from a DST
   * This API allows to creates a new template starting from a DST. Currently implemented only for published DST templates.
   *
   * id UUID The value of _the unique id_
   * returns DigitalSignatureTransaction
   **/
  static dSTIdTemplatizePOST({ id }) {
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
   * Retrieve DSTs
   * This API allows to list the DSTs of an organization.
   *
   * template Boolean Select templates or instances (optional)
   * userId UUID Select the objects relative to the user specified by the parameter. If not specified will be used the id of the current authenticated user (optional)
   * Dollartop Integer A number of results to return. Applied after **$skip**  (optional)
   * Dollarskip Long An offset into the collection of results (optional)
   * Dollarcount Boolean If true, the server includes the count of all the items in the response  (optional)
   * DollarorderBy String An ordering definition (eg. $orderBy=updatedAt,desc) (optional)
   * Dollarfilter String A filter definition (eg. $filter=name == \"Milk\" or surname == \"Bread\") (optional)
   * returns DSTsGetResponse
   **/
  static dSTsGET({ template, userId, Dollartop, Dollarskip, Dollarcount, DollarorderBy, Dollarfilter }) {
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
   * Create a new DST
   * This API allows to creates a new DST. A DST is created in the Draft state and then updated using PUT. Example of creation request:  ``` {   status: \"draft\",   publishedAt: null,   tags: [],   urgent: false,   template: false } ```  To add documents use the Resources Patch endpoint `/DST/{id}/resources`.  If the *template* flag is set true the DST is a Template. If the *publicTemplate* flag is set true the Template is visible to all users with rights to create a DST.  A DST is made made available to users using *publish* end point. A template generates a DST with the *instantiate* endpoint. 
   *
   * digitalSignatureTransaction DigitalSignatureTransaction DST to append to the current resources.
   * returns DigitalSignatureTransaction
   **/
  static dSTsPOST({ digitalSignatureTransaction }) {
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

module.exports = Bit4idPathgroupDigitalSignatureTransactionsService;
