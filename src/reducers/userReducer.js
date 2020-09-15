import loginService from '../services/login';

const { localStorage } = window;
const storageKey = 'loggedAppUser';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER_LOGIN':
      localStorage.setItem(
        storageKey, JSON.stringify(action.data),
      );
      return action.data;
    case 'SET_USER_STORAGE':
      return action.data;
    case 'CLEAR_USER':
      localStorage.removeItem(storageKey);
      return null;
    default:
      return state;
  }
};

export const setUserByLogin = (credentials) => async (dispatch) => {
  const data = await loginService.login(credentials);
  dispatch({
    type: 'SET_USER_LOGIN',
    data,
  });
};

export const setUserByStorage = (data) => ({
  type: 'SET_USER_STORAGE',
  data,
});

export const clearUser = () => ({
  type: 'CLEAR_USER',
});

export default userReducer;
