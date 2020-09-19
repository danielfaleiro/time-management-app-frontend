const SET_USER_IS_EDITING = 'SET_USER_IS_EDITING';
const CLEAR_USER_IS_EDITING = 'CLEAR_NOTE_IS_EDITING';
const initialState = {
  isEditing: false,
  user: {
    username: '',
    name: '',
    status: '',
    hours: '',
  },
};

const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_IS_EDITING:
      return {
        isEditing: true,
        user: action.data,
      };
    case CLEAR_USER_IS_EDITING:
      return initialState;
    default:
      return state;
  }
};

export const setIsEditing = (data, isEditing = true) => {
  if (isEditing) {
    return ({
      type: SET_USER_IS_EDITING,
      data,
    });
  }

  return ({
    type: CLEAR_USER_IS_EDITING,
  });
};

export default editUserReducer;
