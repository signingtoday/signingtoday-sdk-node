/* eslint-disable no-unused-vars */
const Service = require('./Service');

class NotificationsService {

  /**
   * Clear Notifications for a DST
   * Notify that user consumed all active notifications for a DST.
   *
   * id UUID the value of the unique id.
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
   * Gets latest dst Notifications
   * Gets latest user Notifications for DSTs sorted desc by time.
   *
   * Dollartop Integer A number of results to return. Applied after $skip. (optional)
   * Dollarskip Long An offset into the collection. (optional)
   * Dollarcount Boolean if true, the server includes the count of all items in the response. (optional)
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
   * Deregister a deviceId from the push notifications.
   *
   * deviceId String The deviceId to deregister.
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
   * Register a token for push notifications. Only trusted deviceId can be registered. 
   *
   * pushTokenRegistrationRequest InlineObject3 
   * no response value expected for this operation
   **/
  static notificationsPushTokenPOST({ pushTokenRegistrationRequest }) {
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

module.exports = NotificationsService;
