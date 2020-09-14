import React from 'react';
import useField from '../hooks/useField';
import { Button } from '../styled-components/html';
import FormField from './FormField';

const AddTask = () => {
  const date = useField('date', 'date');
  const hours = useField('text', 'hours');
  const task = useField('text', 'task');

  return (
    <>
      <h1>Add Task</h1>
      <form>
        <FormField field={date} title="Date" />
        <FormField field={hours} title="Hours" />
        <FormField field={task} title="Task" />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default AddTask;
