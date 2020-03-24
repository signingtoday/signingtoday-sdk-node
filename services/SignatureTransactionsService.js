/* eslint-disable no-unused-vars */
const Service = require('./Service');

class SignatureTransactionsService {

  /**
   * Mark a DST as canceled
   * This API allows to mark a Digital Signature Transaction as canceled providing a reason. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * dstId id The **dst-id** is the uuid code that identifies a digital signature transaction. It is used as a path parameter to filter the requested operation to the specified **dst** 
   * inlineObject2 InlineObject2 
   * returns inline_response_201_3
   **/
  static cancel_DST({ organizationId, dstId, inlineObject2 }) {
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
   * Create a Digital Signature Transaction
   * This API allows to create a Digital Signature Transaction. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * createSignatureTransaction CreateSignatureTransaction The new DST to create
   * returns inline_response_201_3
   **/
  static create_DST({ organizationId, createSignatureTransaction }) {
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
   * Delete a Digital Signature Transaction
   * This API allows to delete a Digital Signature Transaction. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * dstId id The **dst-id** is the uuid code that identifies a digital signature transaction. It is used as a path parameter to filter the requested operation to the specified **dst** 
   * returns inline_response_200_9
   **/
  static delete_DST({ organizationId, dstId }) {
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
   * Delete the resources of a DST
   * This API allows to delete the resources of a Digital Signature Transaction. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * dstId id The **dst-id** is the uuid code that identifies a digital signature transaction. It is used as a path parameter to filter the requested operation to the specified **dst** 
   * returns inline_response_200_10
   **/
  static delete_DST_resources({ organizationId, dstId }) {
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
   * Get information about a DST
   * This API allows to get information about a Digital Signature Transaction. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * dstId id The **dst-id** is the uuid code that identifies a digital signature transaction. It is used as a path parameter to filter the requested operation to the specified **dst** 
   * returns inline_response_201_3
   **/
  static get_DST({ organizationId, dstId }) {
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
   * Download a document from a DST
   * This API allows to download a document from a digital signature transaction. The document can be downloaded before or after one or every signature have been performed. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * documentId id The **document-id** is the uuid code that identifies a document of a digital signature transaction. This parameter is usually used in order to download a document from a digital signature transaction 
   * returns File
   **/
  static get_document({ organizationId, documentId }) {
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
   * List the DSTs of an organization
   * This API allows to list the Digital Signature Transactions of an organization. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * whereUnderscoresigner String Returns the Digital Signature Transactions where the specified user is a signer, searched by its id (optional)
   * whereUnderscorestatus String Returns the Digital Signature Transactions with the specified status (optional)
   * whereUnderscoretitle String Returns the Digital Signature Transactions that have the specified title (optional)
   * whereUnderscorecreatedUnderscoreby String Returns the Digital Signature Transactions created by the specified user (optional)
   * whereUnderscorecreated String Returns the Digital Signature Transactions created before, after or in the declared range (optional)
   * whereUnderscoresignatureUnderscorestatus String Returns the Digital Signature Transactions where at least one of the signers has the queried status (optional)
   * whereUnderscoredocumentUnderscorename String Returns the Digital Signature Transactions that have into its documents the queried one (optional)
   * whereUnderscorereason String Returns the Digital Signature Transactions with the specified reason (optional)
   * whereUnderscoresignatureUnderscorename String Returns the Digital Signature Transactions where the specified user is a signer, searched by its name (optional)
   * whereUnderscoresignerUnderscoregroup String Returns the Digital Signature Transactions that have the specified group of signers (optional)
   * page Integer Restricts the search to the chosen page (optional)
   * count Integer Sets the number of users per page to display (optional)
   * whereUnderscoreorder String The **where_order** query parameter takes one or more values separated by a comma and a space. The result will be ordered by the first value (ascending order is implied; a \"**-**\" in front of the value indicates descending order), then the second value and so on (optional)
   * returns inline_response_200_8
   **/
  static list_DSTs({ organizationId, whereUnderscoresigner, whereUnderscorestatus, whereUnderscoretitle, whereUnderscorecreatedUnderscoreby, whereUnderscorecreated, whereUnderscoresignatureUnderscorestatus, whereUnderscoredocumentUnderscorename, whereUnderscorereason, whereUnderscoresignatureUnderscorename, whereUnderscoresignerUnderscoregroup, page, count, whereUnderscoreorder }) {
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

module.exports = SignatureTransactionsService;
