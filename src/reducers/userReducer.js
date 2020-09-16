import loginService from '../services/login';
import usersService from '../services/users';

const { localStorage } = window;
const storageKey = 'loggedAppUser';
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const SET_USER_STORAGE = 'SET_USER_STORAGE';
const CLEAR_USER = 'CLEAR_USER';
const UPDATE_USER = 'UPDATE_USER';

const setLocalStorage = (data) => {
  localStorage.setItem(
    storageKey, JSON.stringify(data),
  );
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      setLocalStorage(action.data);
      return action.data;
    case SET_USER_STORAGE:
      return action.data;
    case CLEAR_USER:
      localStorage.removeItem(storageKey);
      return null;
    case UPDATE_USER:
      setLocalStorage(action.data);
      return action.data;
    default:
      return state;
  }
};

export const setUserByLogin = (credentials) => async (dispatch) => {
  const data = await loginService.login(credentials);
  data.token = `bearer ${data.token}`;
  dispatch({
    type: SET_USER_LOGIN,
    data,
  });
};

export const updateUser = (credentials, user) => async (dispatch) => {
  const data = await usersService.updateUser(credentials, user);
  data.token = `bearer ${data.token}`;
  dispatch({
    type: UPDATE_USER,
    data,
  });
};

export const setUserByStorage = (data) => ({
  type: SET_USER_STORAGE,
  data,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export default userReducer;
