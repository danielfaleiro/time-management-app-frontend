import React from 'react';
import UserTable from '../components/UserTable';
import Page from '../styled-components/Page';
import EditUser from '../components/EditUser';

const UsersPage = () => (
  <Page>
    <EditUser />
    <h1>User List</h1>
    <UserTable />
  </Page>
);

export default UsersPage;
