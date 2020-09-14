import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Table, Th, Td } from '../styled-components/html';

const EditButton = styled(FaEdit)`
  padding-right: 12px;
`;

const UserTable = () => (
  <Table>
    <thead>
      <tr>
        <Th>Username</Th>
        <Th>Name</Th>
        <Th>Status</Th>
        <Th>Actions</Th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <Td>daniel.dfs</Td>
        <Td>Daniel</Td>
        <Td>Admin</Td>
        <Td>
          <EditButton />
          <FaTrashAlt />
        </Td>
      </tr>
    </tbody>
  </Table>
);

export default UserTable;
