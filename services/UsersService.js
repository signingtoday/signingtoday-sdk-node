/* eslint-disable no-unused-vars */
const Service = require('./Service');

class UsersService {

  /**
   * Enable or disable a User
   * This API allows to **enable** or **disable** a User account. 
   *
   * id UUID The value of _the unique id_
   * enabled Boolean This is a _boolean_ parameter. If true the User is **enabled**  (optional)
   * no response value expected for this operation
   **/
  static userIdDELETE({ id, enabled }) {
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
   * Retrieve a User
   * This API allows to retrieve a User.
   *
   * id UUID The value of _the unique id_
   * returns User
   **/
  static userIdGET({ id }) {
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
   * Retrieve User identities
   * This API allows to retrieve user identities.
   *
   * id UUID The value of _the unique id_
   * returns List
   **/
  static userIdIdentitiesGET({ id }) {
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
   * Update a User
   * This API allows to update a User.
   *
   * id UUID The value of _the unique id_
   * user User User replacing current object.
   * no response value expected for this operation
   **/
  static userIdPUT({ id, user }) {
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
   * Change the User role
   * This API allows to change the permissions associated to the users, (**capabilities**) according to predefined user roles. 
   *
   * id UUID The value of _the unique id_
   * newRole String The new **role** of the User. Allowed values are **admin**, **instructor**, **signer** 
   * no response value expected for this operation
   **/
  static userIdRolePUT({ id, newRole }) {
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
   * Retrieve Users
   * This allows to get the list of the Users of an Organization.
   *
   * Dollartop Integer A number of results to return. Applied after **$skip**  (optional)
   * Dollarskip Long An offset into the collection of results (optional)
   * Dollarcount Boolean If true, the server includes the count of all the items in the response  (optional)
   * DollarorderBy String An ordering definition (eg. $orderBy=updatedAt,desc) (optional)
   * Dollarfilter String A filter definition (eg. $filter=name == \"Milk\" or surname == \"Bread\") (optional)
   * returns UsersGetResponse
   **/
  static usersGET({ Dollartop, Dollarskip, Dollarcount, DollarorderBy, Dollarfilter }) {
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
   * Retrieve UserGroups
   * This API allows to get the list of the UserGroups.
   *
   * Dollartop Integer A number of results to return. Applied after **$skip**  (optional)
   * Dollarskip Long An offset into the collection of results (optional)
   * Dollarcount Boolean If true, the server includes the count of all the items in the response  (optional)
   * DollarorderBy String An ordering definition (eg. $orderBy=updatedAt,desc) (optional)
   * Dollarfilter String A filter definition (eg. $filter=name == \"Milk\" or surname == \"Bread\") (optional)
   * returns UserGroupGetResponse
   **/
  static usersGroupsGET({ Dollartop, Dollarskip, Dollarcount, DollarorderBy, Dollarfilter }) {
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
   * Create a new UserGroups
   * This API allows to create a new UserGroups.
   *
   * userGroup List UserGroup list to be added.
   * no response value expected for this operation
   **/
  static usersGroupsPOST({ userGroup }) {
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
   * Create a new User
   * This API allows to create a new User.
   *
   * createUserRequest CreateUserRequest 
   * returns UUID
   **/
  static usersPOST({ createUserRequest }) {
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
