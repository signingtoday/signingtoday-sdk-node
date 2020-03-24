/* eslint-disable no-unused-vars */
const Service = require('./Service');

class Bit4idPathgroupNotificationsService {

  /**
   * Clear Notifications for a DST
   * This API notifies that a user consumed all active notifications for a DST.
   *
   * id UUID The value of _the unique id_
   * no response value expected for this operation
   **/
  static notificationsDstIdDELETE({ id }) {
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
   * Get latest DST Notifications
   * This APIs allows to get latest user Notifications for DSTs sorted desc by time.
   *
   * Dollartop Integer A number of results to return. Applied after **$skip**  (optional)
   * Dollarskip Long An offset into the collection of results (optional)
   * Dollarcount Boolean If true, the server includes the count of all the items in the response  (optional)
   * returns NotificationsResponse
   **/
  static notificationsDstsGET({ Dollartop, Dollarskip, Dollarcount }) {
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
   * Clear a registered push notification token
   * This API deregister a deviceId from the push notifications.
   *
   * deviceId String The _deviceId_ to deregister
   * no response value expected for this operation
   **/
  static notificationsPushTokenDELETE({ deviceId }) {
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
   * Register a token for push notifications
   * This API allows to register a token for push notifications. Only trusted deviceId can be registered. 
   *
   * inlineObject6 InlineObject6 
   * no response value expected for this operation
   **/
  static notificationsPushTokenPOST({ inlineObject6 }) {
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

module.exports = Bit4idPathgroupNotificationsService;
