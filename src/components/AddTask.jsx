import React from 'react';
import useField from '../hooks/useField';
import Button from '../styled-components/html';

const AddTask = () => {
  const date = useField('date', 'date');
  const hours = useField('text', 'hours');
  const task = useField('text', 'task');

  const noReset = ({ reset, ...rest }) => rest;

  return (
    <>
      <h1>Add Task</h1>
      <form>
        <div>
          <label htmlFor="date">
            Date:
            <input {...noReset(date)} />
          </label>
        </div>
        <div>
          <label htmlFor="hours">
            Hours:
            <input {...noReset(hours)} />
          </label>
        </div>
        <div>
          <label htmlFor="task">
            Task:
            <input {...noReset(task)} />
          </label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default AddTask;
