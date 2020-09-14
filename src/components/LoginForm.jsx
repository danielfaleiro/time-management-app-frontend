import React from 'react';
import useField from '../hooks/useField';
import Button from '../styled-components/html';
import FormField from './FormField';

const LoginForm = () => {
  const username = useField('text', 'username');
  const password = useField('password', 'password');

  return (
    <form>
      <FormField
        field={username}
        title="Username"
      />
      <FormField
        field={password}
        title="Password"
      />
      <Button type="submit">Log in</Button>
    </form>
  );
};

export default LoginForm;
