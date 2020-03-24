/* eslint-disable no-unused-vars */
const Service = require('./Service');

class SignaturesService {

  /**
   * Create a channel
   * This API allows to create a channel in order to dispose, by another API, the scheduling of a signature. These two APIs are used to integrate SigningToday into another application. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * dstId id The **dst-id** is the uuid code that identifies a digital signature transaction. It is used as a path parameter to filter the requested operation to the specified **dst** 
   * returns inline_response_201_4
   **/
  static create_channel({ organizationId, dstId }) {
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
   * Decline a Digital Signature Transaction
   * This API allows to decline the Signature of a digital signature transaction providing a reason. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * signatureId id The **signature-id** is the uuid code that identifies a signature that has to be performed into a digital signature transaction. It is usually used in the API endpoints to perform, decline or cancel a digital signature transaction 
   * inlineObject5 InlineObject5 
   * returns inline_response_201_3
   **/
  static decline_DST({ organizationId, signatureId, inlineObject5 }) {
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
   * Sign a DST with an automatic signer
   * This API allows to sign a Digital Signature Transaction with an automatic signer certificate. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * signatureId id The **signature-id** is the uuid code that identifies a signature that has to be performed into a digital signature transaction. It is usually used in the API endpoints to perform, decline or cancel a digital signature transaction 
   * automaticSignature AutomaticSignature Automatic Signature description
   * returns inline_response_200_11
   **/
  static perform_DST({ organizationId, signatureId, automaticSignature }) {
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
   * Perform a Signature
   * This API allows to integrate SigningToday into another application. Through this endpoint it is possible to schedule a signature into engine. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * signatureId id The **signature-id** is the uuid code that identifies a signature that has to be performed into a digital signature transaction. It is usually used in the API endpoints to perform, decline or cancel a digital signature transaction 
   * identityId id The **identity-id** is the uuid code that identifies an identity in the wallet of an user. It is, as well, used to restrict the requested operation to the scope of that identity 
   * inlineObject3 InlineObject3 
   * returns inline_response_200_12
   **/
  static perform_signature({ organizationId, signatureId, identityId, inlineObject3 }) {
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
   * Perform a Signature with session
   * This API allows to perform one or more signatures within the same session. This way is possible, in the scenario of a simple signature for example, to perform multiple signatures using the same _one time password_. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * signatureId id The **signature-id** is the uuid code that identifies a signature that has to be performed into a digital signature transaction. It is usually used in the API endpoints to perform, decline or cancel a digital signature transaction 
   * inlineObject4 InlineObject4 
   * returns inline_response_200_13
   **/
  static perform_signature_with_session({ organizationId, signatureId, inlineObject4 }) {
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

module.exports = SignaturesService;
