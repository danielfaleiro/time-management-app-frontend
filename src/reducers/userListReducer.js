import usersService from '../services/users';

const GET_USER_LIST = 'GET_USER_LIST';
const ADD_USER_FROM_MANAGER = 'ADD_USER_FROM_MANAGER';
const DELETE_USER_FROM_LIST = 'DELETE_USER_FROM_LIST';
const UPDATE_USER_FROM_LIST = 'UPDATE_USER_FROM_LIST';

const userListReducer = (state = null, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return action.data;
    case ADD_USER_FROM_MANAGER:
      return [...state, action.data];
    case DELETE_USER_FROM_LIST:
      return state.filter((user) => user.id !== action.data);
    case UPDATE_USER_FROM_LIST:
      return state.map((user) => (user.id === action.data.id ? action.data : user));
    default:
      return state;
  }
};

export const getUserList = (token) => async (dispatch) => {
  const data = await usersService.getUserList(token);
  dispatch({
    type: GET_USER_LIST,
    data,
  });
};

export const addUser = (token, user) => async (dispatch) => {
  const data = await usersService.addUser(token, user);
  dispatch({
    type: ADD_USER_FROM_MANAGER,
    data,
  });
};

export const updateUser = (token, id, user) => async (dispatch) => {
  const data = await usersService.updateUser(token, id, user);
  dispatch({
    type: UPDATE_USER_FROM_LIST,
    data,
  });
};

export const deleteUser = (token, id) => async (dispatch) => {
  await usersService.deleteUser(token, id);
  dispatch({
    type: DELETE_USER_FROM_LIST,
    data: id,
  });
};

export default userListReducer;
