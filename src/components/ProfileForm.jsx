import React from 'react';
import PropTypes from 'prop-types';
import useField from '../hooks/useField';
import FormField from './FormField';
import CancelButton from './CancelButton';
import { Button } from '../styled-components/html';

// Form used for Profile Page and Sign Up Page
const UserForm = ({
  isSignUp, isUserList, onSubmit, isEditing, setIsEditing, user,
}) => {
  const name = useField('text', 'name', user ? user.name : '');
  const username = useField('text', 'username', user ? user.username : '');
  const password = useField('password', 'password', '', user ? '••••••••••••••' : '');
  const hours = useField('number', 'hours', user ? user.hours : '');
  const isDisabled = !isSignUp && !isUserList && !isEditing;

  const handleCancel = () => {
    setIsEditing(false);
  };

  const setMainButtonText = () => {
    if (isSignUp) {
      return 'Sign Up';
    }
    if (isEditing) {
      return 'Update';
    }
    if (isUserList) {
      return 'Add';
    }
    return 'Edit';
  };

  return (
    <form onSubmit={onSubmit}>
      <FormField
        field={name}
        title="Name"
        disabled={isDisabled}
      />
      <FormField
        field={username}
        title="Username"
        disabled={isDisabled}
      />
      <FormField
        field={password}
        title="Password"
        disabled={isDisabled}
      />
      <FormField
        field={hours}
        title="Daily Hours"
        disabled={isDisabled}
      />
      <Button type="submit">{setMainButtonText()}</Button>
      {isEditing && !isSignUp
        && <CancelButton handleCancel={handleCancel} />}
    </form>
  );
};

export default UserForm;

UserForm.defaultProps = {
  isSignUp: false,
  isUserList: false,
  isEditing: false,
  setIsEditing: null,
  user: null,
};

UserForm.propTypes = {
  isSignUp: PropTypes.bool,
  isUserList: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  setIsEditing: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
};
