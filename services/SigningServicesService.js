/* eslint-disable no-unused-vars */
const Service = require('./Service');

class SigningServicesService {

  /**
   * sign-service open post
   * description bla bla
   *
   * returns Object
   **/
  static signServiceOpen() {
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
   * sign-service-open-transaction-id post
   *
   * transactionId String 
   * returns Object
   **/
  static signServiceOpenId({ transactionId }) {
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
   * sign-service-signature-id-perform-identity-id post
   *
   * signatureId String 
   * identityId String 
   * inlineObject8 InlineObject8  (optional)
   * returns Object
   **/
  static signatureIdPerformIdPost({ signatureId, identityId, inlineObject8 }) {
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

module.exports = SigningServicesService;
