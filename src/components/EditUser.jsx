import React from 'react';
import useField from '../hooks/useField';
import { Button } from '../styled-components/html';
import FormField from './FormField';

const EditUser = () => {
  const name = useField('text', 'name');
  const username = useField('text', 'username');
  const status = useField('text', 'status');

  return (
    <>
      <h1>Edit User</h1>
      <form>
        <FormField field={username} title="Username" />
        <FormField field={name} title="Name" />
        <FormField field={status} title="Status" />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default EditUser;
