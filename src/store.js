import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import editNoteReducer from './reducers/editNoteReducer';
import editUserReducer from './reducers/editUserReducer';
import notesReducer from './reducers/notesReducer';
import userListReducer from './reducers/userListReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
  user: userReducer,
  notes: notesReducer,
  editNote: editNoteReducer,
  editUser: editUserReducer,
  userList: userListReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
