import notesService from '../services/notes';

const GET_NOTES_LIST = 'GET_NOTES_LIST';
const ADD_NOTE = 'ADD_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const CLEAR_NOTE_LIST = 'CLEAR_NOTE_LIST';

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NOTES_LIST:
      return action.data;
    case ADD_NOTE:
      return [...state, action.data];
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.data);
    case UPDATE_NOTE:
      return state.map((note) => (note.id === action.data.id ? action.data : note));
    case CLEAR_NOTE_LIST:
      return [];
    default:
      return state;
  }
};

export const getNotes = (token) => async (dispatch) => {
  const data = await notesService.getNotes(token);
  dispatch({
    type: GET_NOTES_LIST,
    data,
  });
};

export const addNote = (token, note) => async (dispatch) => {
  const data = await notesService.addNote(token, note);
  dispatch({
    type: ADD_NOTE,
    data,
  });
};

export const deleteNote = (token, id) => async (dispatch) => {
  await notesService.deleteNote(token, id);
  dispatch({
    type: DELETE_NOTE,
    data: id,
  });
};

export const updateNote = (token, note) => async (dispatch) => {
  const data = await notesService.updateNote(token, note);
  dispatch({
    type: UPDATE_NOTE,
    data,
  });
};

export const clearNoteList = () => ({
  type: CLEAR_NOTE_LIST,
});

export default notesReducer;
