/* eslint-disable no-unused-vars */
const Service = require('./Service');

class OrganizationsService {

  /**
   * Get the settings of an oraganization
   * This API allows to obtain the settings of an organization, such as:   - _default_rao_ : the default rao user of the organization   - _dst_default_months_ : default deadline of a dst before its expiration   - _logo_ : the logo of the organization 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * returns inline_response_200
   **/
  static get_organization({ organizationId }) {
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
   * Edit the settings of an organization
   * This API allows to edit every single setting of an organization except the **slug** field. 
   *
   * organizationId String The **organization-id** represents an organization that is included in the SigninToday application, also know as **slug** and it is used as a path parameter to restrict the asked functionality to the specified organization 
   * updateOrganization UpdateOrganization The settings of the organization to edit
   * returns inline_response_200
   **/
  static patch_organization({ organizationId, updateOrganization }) {
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

module.exports = OrganizationsService;
