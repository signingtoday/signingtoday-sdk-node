/* eslint-disable no-unused-vars */
const Service = require('./Service');

class ServicesService {

  /**
   * Consume a token to change the password
   * This API allows to change the password by consuming a token.
   *
   * passwordToken String The password token issued to change password
   * body String New password associated to the account (BCrypt)
   * no response value expected for this operation
   **/
  static authChangePasswordPOST({ passwordToken, body }) {
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
   * Request to recover own password
   * This API requests to recover the own password.
   *
   * username String Username associated to the account
   * domain String Domain associated to the account
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
   * Reset a user password with superuser
   * This API allows to reset the password of a user. This is possible when the request is performed with a superuser.
   *
   * username String Username associated to the account
   * domain String Domain associated to the account
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
   * Reset your own password
   * This API allows to reset your own password knowing the previous one with a logged user.
   *
   * inlineObject4 InlineObject4 
   * no response value expected for this operation
   **/
  static authPasswordResetPOST({ inlineObject4 }) {
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
   * Get token to change password
   * This API allows to get a password token to use in order to change a password.
   *
   * returns List
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
   * Register or Update a SAML user
   * This API allows to register or Update a SAML user.
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
   * Return the current logged in user
   * This API allows to retrieve the current logged in user.
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
   * Retrieve the App configuration
   * This API allows to get the public configuration associated to the application. 
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
   * Log out current user terminating the session
   * This API allows to Log out current user.
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
   * Get the bearer token
   * This API allows to get the token needed to access other APIs through the OAuth2 authentication.
   *
   * username String The username in the form _username_@_domain_ where *domain* is the organization the user belongs to (optional)
   * password String This is the actual password of the user (optional)
   * grantUnderscoretype String A parameter that indicates the type of the grant in order to perform the basic authentication (optional)
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
   * Retrieve a Resource (of service)
   * This API allows to extract thumbnails from a PDF Resource.
   *
   * id UUID The value of _the unique id_
   * page Integer The page to retrieve
   * width Integer The output image width (optional)
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
   * Change the password of a service user
   * This API allows to change the password of a **service user**. 
   *
   * username String Username associated to the account
   * domain String Domain associated to the account
   * body String New password associated to the account (BCrypt)
   * no response value expected for this operation
   **/
  static serviceChangePasswordPOST({ username, domain, body }) {
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
   * Sync user accounts
   * This API allows to sync user accounts.
   *
   * inlineObject List User Accounts
   * returns UserSyncReport
   **/
  static serviceUsersSyncPOST({ inlineObject }) {
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
