const SET_NOTE_IS_EDITING = 'SET_NOTE_IS_EDITING';
const CLEAR_NOTE_IS_EDITING = 'CLEAR_NOTE_IS_EDITING';
const initialState = {
  isEditing: false,
  note: {
    date: '',
    hours: '',
    task: '',
    id: '',
    user: '',
  },
};

const editNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTE_IS_EDITING:
      return {
        isEditing: true,
        note: action.data,
      };
    case CLEAR_NOTE_IS_EDITING:
      return initialState;
    default:
      return state;
  }
};

export const setIsEditing = (data, isEditing = true) => {
  if (isEditing) {
    return ({
      type: SET_NOTE_IS_EDITING,
      data,
    });
  }

  return ({
    type: CLEAR_NOTE_IS_EDITING,
  });
};

export default editNoteReducer;
