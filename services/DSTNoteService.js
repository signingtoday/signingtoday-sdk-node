/* eslint-disable no-unused-vars */
const Service = require('./Service');

class DSTNoteService {

  /**
   * Retrieve the DSTNotes associated to the DST
   * Retrieves the DST Notes associated to the DST.
   *
   * id UUID the value of the unique id.
   * returns List
   **/
  static dSTIdNoteGET({ id }) {
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
   * Deletes a DSTNote
   * Deletes a DSTNote.
   *
   * id UUID the value of the unique id.
   * noteId Long The reference of a DSTNote
   * no response value expected for this operation
   **/
  static dSTIdNoteNoteIdDELETE({ id, noteId }) {
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
   * Modifies a DSTNote
   * Modifies a DSTNote.
   *
   * id UUID the value of the unique id.
   * noteId Long The reference of a DSTNote
   * dSTNote DSTNote DSTNote replacing current object.
   * returns DSTNote
   **/
  static dSTIdNoteNoteIdPUT({ id, noteId, dSTNote }) {
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
   * Append a new DSTNote
   * Append a new DSTNote to the DST.
   *
   * id UUID the value of the unique id.
   * dSTNotePost InlineObject  (optional)
   * returns DSTNote
   **/
  static dSTIdNotePOST({ id, dSTNotePost }) {
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

module.exports = DSTNoteService;
