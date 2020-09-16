import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import editNoteReducer from './reducers/editNoteReducer';
import notesReducer from './reducers/notesReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
  user: userReducer,
  notes: notesReducer,
  editNote: editNoteReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
