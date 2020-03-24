/* eslint-disable no-unused-vars */
const Service = require('./Service');

class Bit4idPathgroupDevicesService {

  /**
   * Clear a trusted device
   * This APIs allows to deregister a _deviceId_ of a trusted device.  It also deletes any notification push-token associated to the trusted device. 
   *
   * deviceId String The _deviceId_ to deregister
   * userId UUID Select the objects relative to the user specified by the parameter. If not specified will be used the id of the current authenticated user (optional)
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
   * This API allows to retrieve a challenge in order to authorize a new trusted device.   - If asked in image/png the challenge is given encoded as a QR-Code image.   - An invocation of the endpoint invalidate any previous challenge.   - The challenge lasts 10 minutes. 
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
   * This API allows to register a new trusted device. If the device is already present, it returns the current associated Token and updates the name. 
   *
   * inlineObject7 InlineObject7 
   * returns List
   **/
  static deviceAuthorizationPOST({ inlineObject7 }) {
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
   * The API allows to enumerate all the devices of a user. 
   *
   * userId UUID Select the objects relative to the user specified by the parameter. If not specified will be used the id of the current authenticated user (optional)
   * Dollartop Integer A number of results to return. Applied after **$skip**  (optional)
   * Dollarskip Long An offset into the collection of results (optional)
   * Dollarcount Boolean If true, the server includes the count of all the items in the response  (optional)
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

module.exports = Bit4idPathgroupDevicesService;
