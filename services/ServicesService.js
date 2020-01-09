/* eslint-disable no-unused-vars */
const Service = require('./Service');

class ServicesService {

  /**
   * Consume a token to change password.
   *
   * passwordToken String The password token issued to change password.
   * newPassword String New password associated to the account (BCrypt).
   * no response value expected for this operation
   **/
  static authChangePasswordPOST({ passwordToken, newPassword }) {
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
   * Requests to recover own password.
   *
   * username String Username associated to the account.
   * domain String Domain associated to the account.
   * no response value expected for this operation
   **/
  static authPasswordLostGET({ username, domain }) {
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
   * A superuser can reset a user password.
   *
   * username String Username associated to the account.
   * domain String Domain associated to the account.
   * no response value expected for this operation
   **/
  static authPasswordResetGET({ username, domain }) {
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
   * A logged user can reset its password knowing the previous one.
   *
   * passwordResetRequest InlineObject1 
   * no response value expected for this operation
   **/
  static authPasswordResetPOST({ passwordResetRequest }) {
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
   * Gets a password token to be used to change password.
   *
   * returns String
   **/
  static authPasswordTokenGET() {
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
   * Register/Update a SAML user.
   *
   * domain String SAML domain
   * iDToken1 String The BASE64-encoded SAML Reply in JSON
   * iDToken2 String The Hex-encoded HMAC-SHA256 of the decoded IDToken1
   * no response value expected for this operation
   **/
  static authSamlPOST({ domain, iDToken1, iDToken2 }) {
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
   * Returns current logged in user
   *
   * returns User
   **/
  static authUser() {
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
   * Retrieves the App configuration
   * Public configuration associated to the application. 
   *
   * returns Map
   **/
  static configurationGet() {
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
   * Logs out current logged in user session
   *
   * no response value expected for this operation
   **/
  static logoutUser() {
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
   * username String  (optional)
   * password String  (optional)
   * grantUnderscoretype String  (optional)
   * returns inline_response_200
   **/
  static oauthTokenPOST({ username, password, grantUnderscoretype }) {
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
   * Retrieves a Resource
   * Extracts thumbnails from a PDF Resource.
   *
   * id UUID the value of the unique id.
   * page Integer the page to retrieves.
   * width Integer output img width. (optional)
   * returns File
   **/
  static pdfResourceIdThumbsGET({ id, page, width }) {
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
   * Change a user password (used by service accounts)
   *
   * username String Username associated to the account.
   * domain String Domain associated to the account.
   * newPassword String New password associated to the account (BCrypt).
   * no response value expected for this operation
   **/
  static serviceChangePasswordPOST({ username, domain, newPassword }) {
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
   * Sync user accounts.
   *
   * userSyncBody List User Accounts
   * returns UserSyncReport
   **/
  static serviceUsersSyncPOST({ userSyncBody }) {
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

module.exports = ServicesService;
