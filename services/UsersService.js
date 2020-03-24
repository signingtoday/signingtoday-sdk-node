/* eslint-disable no-unused-vars */
const Service = require('./Service');

class UsersService {

  /**
   * Create a user of the organization
   * This API allows to create a new user of the organization. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * createUser CreateUser The new user object to create
   * returns inline_response_201
   **/
  static create_user({ organizationId, createUser }) {
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
   * Get information about an user
   * This API allows to get information about an user. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * userId id The **user-id** is the uuid code that identifies a user of an organization. It is used as a path parameter to restrict the requested operation to the scope of that user 
   * returns inline_response_201
   **/
  static get_user({ organizationId, userId }) {
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
   * Enumerate the users of an organization
   * This API allows to enumerate the users of an organization. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * whereUnderscoremembershipUnderscoreid String Returns the users that have the specified id (optional)
   * whereUnderscoreemail String Returns the users that have the specified email (optional)
   * whereUnderscorelastUnderscorename String Returns the users that have the specified last name (optional)
   * whereUnderscorefirstUnderscorename String Returns the users that have the specified first name (optional)
   * whereUnderscoreautomatic Boolean If set up to **true** returns automatic users only, otherwise returns non automatic users only (optional)
   * whereUnderscorerao Boolean If set up to **true** returns rao users only, otherwise returns non rao users only (optional)
   * page Integer Restricts the search to the chosen page (optional)
   * count Integer Sets the number of users per page to display (optional)
   * whereUnderscoreorder String The **where_order** query parameter takes one or more values separated by a comma and a space. The result will be ordered by the first value (ascending order is implied; a \"**-**\" in front of the value indicates descending order), then the second value and so on (optional)
   * returns inline_response_200_1
   **/
  static list_users({ organizationId, whereUnderscoremembershipUnderscoreid, whereUnderscoreemail, whereUnderscorelastUnderscorename, whereUnderscorefirstUnderscorename, whereUnderscoreautomatic, whereUnderscorerao, page, count, whereUnderscoreorder }) {
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
   * Edit one or more user properties
   * This API allows to edit one or more user properties. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * userId id The **user-id** is the uuid code that identifies a user of an organization. It is used as a path parameter to restrict the requested operation to the scope of that user 
   * updateUser UpdateUser User properties to be edited
   * returns inline_response_201
   **/
  static update_user({ organizationId, userId, updateUser }) {
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

module.exports = UsersService;
