/* eslint-disable no-unused-vars */
const Service = require('./Service');

class DevicesService {

  /**
   * Clear a trusted device
   * Deregister a deviceId of a trusted device. It also deletes any notification push-token associated to the trusted device. 
   *
   * deviceId String The deviceId to deregister.
   * userId UUID Select the objects relative to the user specified by the parameters. If not specified uses the id of the current authenticated user. (optional)
   * no response value expected for this operation
   **/
  static deviceAuthorizationDELETE({ deviceId, userId }) {
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
   * Retrieve a challenge for authorizing a new trusted device
   * If asked in image/png the challenge is given encoded as a QR-Code image. An invocation of the endpoint invalidate any previous challenge. The challenge lasts 10 minutes. 
   *
   * returns DeviceAuthorizationResponse
   **/
  static deviceAuthorizationGET() {
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
   * Register a new trusted device
   * Register a new trusted device. If the device is already present, it returns the current associated Token and updates the name. 
   *
   * trustedDeviceAuthorization InlineObject2 
   * returns String
   **/
  static deviceAuthorizationPOST({ trustedDeviceAuthorization }) {
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
   * Get the list of trusted devices
   * Register a token for push notifications
   *
   * userId UUID Select the objects relative to the user specified by the parameters. If not specified uses the id of the current authenticated user. (optional)
   * Dollartop Integer A number of results to return. Applied after $skip. (optional)
   * Dollarskip Long An offset into the collection. (optional)
   * Dollarcount Boolean if true, the server includes the count of all items in the response. (optional)
   * returns TrustedDevicesGetResponse
   **/
  static devicesGET({ userId, Dollartop, Dollarskip, Dollarcount }) {
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

module.exports = DevicesService;
