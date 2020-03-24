/* eslint-disable no-unused-vars */
const Service = require('./Service');

class Bit4idPathgroupDSTNoteService {

  /**
   * Retrieve the DSTNotes associated to the DST
   * This API allows to retrieve the DST Notes associated to the DST.
   *
   * id UUID The value of _the unique id_
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
   * Delete a DSTNote
   * This API allows to delete a DSTNote.
   *
   * id UUID The value of _the unique id_
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
   * Edit a DSTNote
   * This API allows to edit a DSTNote.
   *
   * id UUID The value of _the unique id_
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
   * This API allows to append a new DSTNote to the DST.
   *
   * id UUID The value of _the unique id_
   * inlineObject1 InlineObject1  (optional)
   * returns DSTNote
   **/
  static dSTIdNotePOST({ id, inlineObject1 }) {
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

module.exports = Bit4idPathgroupDSTNoteService;
