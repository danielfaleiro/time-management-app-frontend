import React from 'react';
import PropTypes from 'prop-types';
import useField from '../hooks/useField';
import FormField from './FormField';
import CancelButton from './CancelButton';
import { Button } from '../styled-components/html';
import CredentialsForm from '../styled-components/CredentialsForm';

// Form used for Profile Page and Sign Up Page
const ProfileForm = ({
  isSignUp, isUserList, onSubmit, isEditing, setIsEditing, user,
}) => {
  const name = useField('text', 'name', user ? user.name : '', 'Ex.: Joe');
  const username = useField('text', 'username', user ? user.username : '', 'Ex.: joesummers');
  const password = useField('password', 'password', '', user ? '••••••••••••••' : 'Ex.: password');
  const hours = useField('number', 'hours', user ? user.hours : '', 'Ex.: 8');
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
    <CredentialsForm onSubmit={onSubmit} center={isSignUp}>
      <FormField
        field={name}
        title="Name"
        disabled={isDisabled}
      />
      <FormField
        field={username}
        title="Username*"
        disabled={isDisabled}
      />
      <FormField
        field={password}
        title={isSignUp ? 'Password*' : 'Password'}
        disabled={isDisabled}
      />
      <FormField
        field={hours}
        title="Daily Hours*"
        disabled={isDisabled}
        min={1}
        max={24}
      />
      <Button type="submit">{setMainButtonText()}</Button>
      {isEditing && !isSignUp
        && <CancelButton handleCancel={handleCancel} />}
    </CredentialsForm>
  );
};

export default ProfileForm;

ProfileForm.defaultProps = {
  isSignUp: false,
  isUserList: false,
  isEditing: false,
  setIsEditing: null,
  user: null,
};

ProfileForm.propTypes = {
  isSignUp: PropTypes.bool,
  isUserList: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  setIsEditing: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
};
