import React from 'react';
import PropTypes from 'prop-types';
import useField from '../hooks/useField';
import FormField from './FormField';
import { Button } from '../styled-components/html';

// Form used for Profile Page and Sign Up Page
const UserForm = ({ isSignUp, onSubmit }) => {
  const name = useField('text', 'name');
  const username = useField('text', 'username');
  const password = useField('password', 'password');
  const hours = useField('number', 'hours');

  return (
    <form onSubmit={onSubmit}>
      <FormField
        field={name}
        title="Name"
        disabled={!isSignUp}
      />
      <FormField
        field={username}
        title="Username"
        disabled={!isSignUp}
      />
      <FormField
        field={password}
        title="Password"
        disabled={!isSignUp}
      />
      <FormField
        field={hours}
        title="Daily Hours"
        disabled={!isSignUp}
      />
      <Button type="submit">{isSignUp ? 'Sing Up' : 'Edit'}</Button>
    </form>
  );
};

export default UserForm;

UserForm.defaultProps = {
  isSignUp: false,
};

UserForm.propTypes = {
  isSignUp: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};
