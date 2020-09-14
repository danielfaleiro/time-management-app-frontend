import React from 'react';
import useField from '../hooks/useField';
import FormField from './FormField';
import Button from '../styled-components/html';

const Profile = () => {
  const name = useField('text', 'name');
  const username = useField('text', 'username');
  const password = useField('password', 'password');
  const dailyHours = useField('number', '');

  return (
    <form>
      <FormField field={name} title="Name" disabled />
      <FormField field={username} title="Username" disabled />
      <FormField field={password} title="Password" disabled />
      <FormField field={dailyHours} title="Daily Hours" disabled />
      <Button type="submit">Edit</Button>
    </form>
  );
};

export default Profile;
