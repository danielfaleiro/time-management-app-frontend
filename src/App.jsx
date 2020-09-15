import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import links from './links';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import UsersPage from './pages/UsersPage';
import TasksPage from './pages/TasksPage';
import { setUserByStorage } from './reducers/userReducer';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const userJSON = window.localStorage.getItem('loggedAppUser');
    if (userJSON) {
      const storageUser = JSON.parse(userJSON);
      dispatch(setUserByStorage(storageUser));
    }
  }, [dispatch]);

  return (
    <Router className="App">
      <Switch>
        <Route path={links.profile}>
          {user ? <ProfilePage /> : <Redirect to={links.login} />}
        </Route>
        <Route path={links.login}>
          {user ? <Redirect to={links.tasks} /> : <LoginPage />}
        </Route>
        <Route path={links.signup}>
          {user ? <Redirect to={links.tasks} /> : <SignUpPage />}
        </Route>
        <Route path={links.users}>
          {user ? <UsersPage /> : <Redirect to={links.login} />}
        </Route>
        {/* Tasks page must be last option */}
        <Route path={links.tasks}>
          {user ? <TasksPage /> : <Redirect to={links.login} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
