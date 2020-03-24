/* eslint-disable no-unused-vars */
const Service = require('./Service');

class RobotsService {

  /**
   * Clear a Robot authentication lifetime token
   * This API allows to clear the Robot authentication lifetime token.
   *
   * username String The _username_ associated to the account (optional)
   * domain String The _domain_ associated to the account (optional)
   * no response value expected for this operation
   **/
  static robotAuthenticationDELETE({ username, domain }) {
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
   * Retrieve the Robot authentication lifetime token
   * This API allows to generate or retrieves the Robot authentication lifetime token for the specified robot account, or the current logged in account. 
   *
   * username String The _username_ associated to the account (optional)
   * domain String The _domain_ associated to the account (optional)
   * returns RobotAuthenticationToken
   **/
  static robotAuthenticationGET({ username, domain }) {
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
   * Retrieve the Robot configuration
   * This API allows to retrieve the Robot configuration. 
   *
   * username String The _username_ associated to the account (optional)
   * domain String The _domain_ associated to the account (optional)
   * returns RobotConfiguration
   **/
  static robotConfigurationGET({ username, domain }) {
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
   * Create a new DST in one call
   * This API allows to create a new DST with a more convenient interface for client applications. The purpose is to provide a method for the creation of a DST in order to semplify the integration into third part applications. 
   *
   * createDigitalSignatureTransaction CreateDigitalSignatureTransaction description
   * returns DigitalSignatureTransaction
   **/
  static robotDSTsPOST({ createDigitalSignatureTransaction }) {
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
   * Instantiate a DST from a template by robot
   * This API allows to instantiate a DST from a template patching parts of its data structure. 
   *
   * id UUID The value of _the unique id_
   * instantiateDSTTemplate InstantiateDSTTemplate 
   * returns DigitalSignatureTransaction
   **/
  static robotIdInstantiatePOST({ id, instantiateDSTTemplate }) {
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

module.exports = RobotsService;
