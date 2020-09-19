import React from 'react';
import UserTable from '../components/UserTable';
import EditUser from '../components/UserForm';
import AppPage from '../components/Page';

const UsersPage = () => (
  <AppPage>
    <EditUser />
    <h1>User List</h1>
    <UserTable />
  </AppPage>
);

export default UsersPage;
