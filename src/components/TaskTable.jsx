import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Table, Th, Td } from '../styled-components/html';

const EditButton = styled(FaEdit)`
  padding-right: 12px;
`;

const TaskTable = () => (
  <Table>
    <thead>
      <tr>
        <Th>Date</Th>
        <Th>Hours</Th>
        <Th>Task</Th>
        <Th>Actions</Th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <Td>21-05</Td>
        <Td>8</Td>
        <Td>Example task</Td>
        <Td>
          <EditButton />
          <FaTrashAlt />
        </Td>
      </tr>
    </tbody>
  </Table>
);

export default TaskTable;
