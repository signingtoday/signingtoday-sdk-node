/* eslint-disable no-unused-vars */
const Service = require('./Service');

class Bit4idPathgroupTokensService {

  /**
   * Create an application token
   * This API allows to create an application token. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * createToken CreateToken Token data
   * returns inline_response_201_4
   **/
  static create_token({ organizationId, createToken }) {
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
   * Delete a token of the organization
   * This API allows to delete a token of the organization. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * tokenId id The **token-id** is the uuid code that identifies a token. It is, as well, used to restrict the requested operation to the scope of that token 
   * returns inline_response_201_2
   **/
  static delete_token({ organizationId, tokenId }) {
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
   * Get information about a token
   * This API allows to get information about a token. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * tokenId id The **token-id** is the uuid code that identifies a token. It is, as well, used to restrict the requested operation to the scope of that token 
   * returns inline_response_201_4
   **/
  static get_token({ organizationId, tokenId }) {
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
   * Enumerate the tokens of an organization
   * This API allows to enumerate the tokens of an organization. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * whereUnderscoreuser String Returns the tokens of the specified user, searched by its id (optional)
   * whereUnderscorelabel String Returns the tokens with the specified label (optional)
   * count Integer Sets the number of tokens per page to display (optional)
   * page Integer Restricts the search to chosen page (optional)
   * returns inline_response_200_11
   **/
  static list_tokens({ organizationId, whereUnderscoreuser, whereUnderscorelabel, count, page }) {
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
   * Enumerate the tokens of an user
   * This API allows to enumerate all the tokens of an user. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * userId id The **user-id** is the uuid code that identifies a user of an organization. It is used as a path parameter to restrict the requested operation to the scope of that user 
   * page Integer Restricts the search to the chosen page (optional)
   * count Integer Sets the number of users per page to display (optional)
   * returns inline_response_200_11
   **/
  static list_user_tokens({ organizationId, userId, page, count }) {
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
   * Update the properties of a token
   * This API allows to update the properties of a token. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * tokenId id The **token-id** is the uuid code that identifies a token. It is, as well, used to restrict the requested operation to the scope of that token 
   * updateToken UpdateToken Token data
   * returns inline_response_201_4
   **/
  static update_token({ organizationId, tokenId, updateToken }) {
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

module.exports = Bit4idPathgroupTokensService;
