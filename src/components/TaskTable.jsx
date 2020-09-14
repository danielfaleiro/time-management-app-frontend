import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import theme from '../theme';

const Table = styled.table`
  width: 100%;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
`;

const Th = styled(Td)`
  background-color: ${theme.colors.primary};
  color: white;
`;

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
