/* eslint-disable no-unused-vars */
const Service = require('./Service');

class SigningServiceService {

  /**
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
   *
   * signatureId String 
   * identityId String 
   * payload Object  (optional)
   * returns Object
   **/
  static signatureIdPerformIdPost({ signatureId, identityId, payload }) {
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

module.exports = SigningServiceService;
