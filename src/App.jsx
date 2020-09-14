import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import links from './links';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import UsersPage from './pages/UsersPage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route path={links.profile}>
          <ProfilePage />
        </Route>
        <Route path={links.login}>
          <LoginPage />
        </Route>
        <Route path={links.signup}>
          <SignUpPage />
        </Route>
        <Route path={links.users}>
          <UsersPage />
        </Route>
        {/* Tasks page must be last option */}
        <Route path={links.tasks}>
          <TasksPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
