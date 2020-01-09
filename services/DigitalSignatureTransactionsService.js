/* eslint-disable no-unused-vars */
const Service = require('./Service');

class DigitalSignatureTransactionsService {

  /**
   * Retrieve the audit records associated to the DST
   * Retrieves the audit records associated to the DST.
   *
   * id UUID the value of the unique id.
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
   * Deletes a DST
   * Deletes a DST.
   *
   * id UUID the value of the unique id.
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
   * Fills a form of a DST.
   * Fills a form of a DST.
   *
   * id UUID the value of the unique id.
   * form FillableForm The form filled by the user.
   * returns DigitalSignatureTransaction
   **/
  static dSTIdFillPATCH({ id, form }) {
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
   * Retrieves a DST
   * Retrieves a DST.
   *
   * id UUID the value of the unique id.
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
   * Instantiate a DST from a template by specifying the template Id.
   *
   * id UUID the value of the unique id.
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
   * Sends notifications for a DST
   * Sends notifications to pending users for an active DST
   *
   * id UUID the value of the unique id.
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
   * Updates a DST
   * Updates a DST.
   *
   * id UUID the value of the unique id.
   * dST DigitalSignatureTransaction DST replacing current object.
   * returns DigitalSignatureTransaction
   **/
  static dSTIdPUT({ id, dST }) {
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
   * Publishes a DST
   * Publishes a DST, the new state becomes published. It will automatically evolve to a new state where it can be filled/signed or is in error.
   *
   * id UUID the value of the unique id.
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
   * Replace a rejected DST instantiating a new one. The replacing DST is created in DRAFT state.
   *
   * id UUID the value of the unique id.
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
   * Returns the address for signing
   * Returns the address for signing
   *
   * id UUID the value of the unique id.
   * docId Integer reference to docId to sign
   * signId Integer reference to signature request id
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
   * Creates a template from a DST
   * Creates a new template starting from a DST. Currently implemented only for published DST templates.
   *
   * id UUID the value of the unique id.
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
   * Retrieves DSTs
   * Lists the DSTs.
   *
   * template Boolean Select templates or instances (optional)
   * userId UUID Select the objects relative to the user specified by the parameters. If not specified uses the id of the current authenticated user. (optional)
   * Dollartop Integer A number of results to return. Applied after $skip. (optional)
   * Dollarskip Long An offset into the collection. (optional)
   * Dollarcount Boolean if true, the server includes the count of all items in the response. (optional)
   * DollarorderBy String A ordering definition (eg. $orderBy=updatedAt,desc) (optional)
   * Dollarfilter String A filter definition (eg. $filter=name == 'Milk' or surname == 'Bread') (optional)
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
   * Creates a new DST
   * Creates a new DST. A DST is created in the Draft state and then updated using PUT. Example of creation request: ``` { status: 'draft', publishedAt: null, tags: [], urgent: false, template: false } ``` To add documents use the Resources Patch endpoint `/DST/{id}/resources`. If the *template* flag is set true the DST is a Template. If the *publicTemplate* flag is set true the Template is visible to all users with rights to create a DST. A DST is made made available to users using *publish* end point. A template generates a DST with the *instantiate* endpoint. 
   *
   * dST DigitalSignatureTransaction DST to append to the current resources.
   * returns DigitalSignatureTransaction
   **/
  static dSTsPOST({ dST }) {
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

module.exports = DigitalSignatureTransactionsService;
