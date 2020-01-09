/* eslint-disable no-unused-vars */
const Service = require('./Service');

class Bit4idPathgroupIdentitiesService {

  /**
   * Associate an appearance to an identity
   * Associate a signature appearance to an already existing identity through an url to an image. This appearance will be displayed on the document after the signature. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * identityId id The **identity-id** is the uuid code that identifies an identity in the wallet of an user. It is, as well, used to restrict the requested operation to the scope of that identity 
   * inlineObject InlineObject 
   * returns inline_response_200_4
   **/
  static associate_appearance({ organizationId, identityId, inlineObject }) {
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
   * Associate to an user an already existing identity
   * Associate to an user of the organization an already existing identity of a provider. The _provider_data_ field is an object and is different for each provider. The minimum set of information to provide as provider_data is the following:   - **aruba**     - _auth_domain_ : string     - _username_ : string     - _password_ : string   - **aruba-auto**     - _auth_domain_ : string     - _username_ : string     - _password_ : string   - **infocert**     - _username_ : string     - _password_ : string   - **namirial**     - _id_titolare_ : string     - _id_otp_ : string     - _username_ : string     - _password_ : string 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * userId id The **user-id** is the uuid code that identifies a user of an organization. It is used as a path parameter to restrict the requested operation to the scope of that user 
   * identityAssociation IdentityAssociation Provider data to associate
   * returns inline_response_200_4
   **/
  static associate_identity({ organizationId, userId, identityAssociation }) {
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
   * Create an identity from token
   * This API allows to create an identity from a token. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * createIdentitybyToken CreateIdentitybyToken Body of the request to create an identity from a token
   * returns inline_response_201_2
   **/
  static create_token_from_identity({ organizationId, createIdentitybyToken }) {
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
   * Delete the appearance of an identity
   * This API allows to delete the appearance associated to an identity. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * identityId id The **identity-id** is the uuid code that identifies an identity in the wallet of an user. It is, as well, used to restrict the requested operation to the scope of that identity 
   * returns inline_response_200_4
   **/
  static delete_appearance({ organizationId, identityId }) {
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
   * Delete an enrollment request
   * This API allows to delete an enrollment request. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * enrollmentId id The **enrollment-id** is the uuid code that identifies a specific enrollment request 
   * returns inline_response_201_2
   **/
  static delete_enrollment_request({ organizationId, enrollmentId }) {
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
   * Delete an identity
   * This API allows to delete an identity of an user. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * identityId id The **identity-id** is the uuid code that identifies an identity in the wallet of an user. It is, as well, used to restrict the requested operation to the scope of that identity 
   * returns inline_response_200_3
   **/
  static delete_identity({ organizationId, identityId }) {
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
   * Get information about an enrollment request
   * This API allows to get information about an enrollment request. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * enrollmentId id The **enrollment-id** is the uuid code that identifies a specific enrollment request 
   * returns inline_response_201_1
   **/
  static get_enrollment_request({ organizationId, enrollmentId }) {
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
   * Get information about an identity
   * This API allows to get all the information of an identity. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * identityId id The **identity-id** is the uuid code that identifies an identity in the wallet of an user. It is, as well, used to restrict the requested operation to the scope of that identity 
   * returns inline_response_200_2
   **/
  static get_identity({ organizationId, identityId }) {
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
   * Enumerate the enrollment requests of an organization
   * This API allows to enumerate the enrollment requests of an organization. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * whereUnderscoreprovider String Returns the identity requests that have been issued by the specified provider (optional)
   * whereUnderscoreuser String Returns the identity requests of the specified user, searched by its id (optional)
   * whereUnderscorefirstUnderscorename String Returns the identity requests of the users that have the specified first name (optional)
   * whereUnderscorelastUnderscorename String Returns the identity requests of the users that have the specified last name (optional)
   * whereUnderscoreregisteredUnderscoreby String Returns the identity requests registered by this user (optional)
   * whereUnderscorefiscalUnderscorecode String Returns the identity requests have the specified fiscal code (optional)
   * page Integer Restricts the search to the chosen page (optional)
   * count Integer Sets the number of users per page to display (optional)
   * returns inline_response_200_5
   **/
  static list_enrollment_requests({ organizationId, whereUnderscoreprovider, whereUnderscoreuser, whereUnderscorefirstUnderscorename, whereUnderscorelastUnderscorename, whereUnderscoreregisteredUnderscoreby, whereUnderscorefiscalUnderscorecode, page, count }) {
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
   * Enumerate the identities of an organization
   * This API allows to enumerate all the users of an organization. It is possible to filter the data using the supported _django lookups_. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * whereUnderscoreprovider String Returns the identities that have been issued by the specified provider (optional)
   * whereUnderscoreuser String Returns the identities of the specified user, searched by its id (optional)
   * whereUnderscorefirstUnderscorename String Returns the identities of the users that have the specified first name (optional)
   * whereUnderscorelastUnderscorename String Returns the identities of the users that have the specified last name (optional)
   * whereUnderscoreregisteredUnderscoreby String Returns the identities registered by this user (optional)
   * whereUnderscorefiscalUnderscorecode String Returns the identities that have the specified fiscal code (optional)
   * page Integer Restricts the search to the chosen page (optional)
   * count Integer Sets the number of users per page to display (optional)
   * returns inline_response_200_1
   **/
  static list_identities({ organizationId, whereUnderscoreprovider, whereUnderscoreuser, whereUnderscorefirstUnderscorename, whereUnderscorelastUnderscorename, whereUnderscoreregisteredUnderscoreby, whereUnderscorefiscalUnderscorecode, page, count }) {
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
   * List the enrollments of an user
   * This API allows to list all the enrollments of an user. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * userId id The **user-id** is the uuid code that identifies a user of an organization. It is used as a path parameter to restrict the requested operation to the scope of that user 
   * page Integer Restricts the search to the chosen page (optional)
   * count Integer Sets the number of users per page to display (optional)
   * returns inline_response_200_5
   **/
  static list_user_enrollments({ organizationId, userId, page, count }) {
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
   * Enumerate the identities of an user
   * This API allows to enumerate all the identities of an user, which are located in its wallet. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * userId id The **user-id** is the uuid code that identifies a user of an organization. It is used as a path parameter to restrict the requested operation to the scope of that user 
   * page Integer Restricts the search to the chosen page (optional)
   * count Integer Sets the number of users per page to display (optional)
   * returns inline_response_200_1
   **/
  static list_user_identities({ organizationId, userId, page, count }) {
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
   * Submit an enrollment request
   * This API allows to submit an enrollment request. The user of the request will be created if it does not exists already. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * identityRequest IdentityRequest The enrollment request to submit
   * returns inline_response_201_1
   **/
  static request_enrollment({ organizationId, identityRequest }) {
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

module.exports = Bit4idPathgroupIdentitiesService;
