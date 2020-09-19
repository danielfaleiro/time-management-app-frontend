import React, { useState } from 'react';
import styled from 'styled-components';
import TaskTable from './TaskTable';
import { Button } from '../styled-components/html';

const StyledButton = styled(Button)`
  margin-left: 12px;
`;

const TaskList = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleClick = () => {
    setStartDate('');
    setEndDate('');
  };

  return (
    <>
      <h1>Task List</h1>
      <p>
        <span>Filter from </span>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          name="startDate"
        />
        <span> to </span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          name="endDate"
        />
        <StyledButton onClick={handleClick}>Reset</StyledButton>
      </p>
      <hr />
      <TaskTable startDate={startDate} endDate={endDate} />
    </>
  );
};

export default TaskList;
