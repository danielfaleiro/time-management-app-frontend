import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setIsEditing } from '../reducers/editUserReducer';
import EditButton from './EditButton';

const EditUserButton = ({ user }) => {
  const dispatch = useDispatch();

  const handleSetIsEditing = () => {
    dispatch(setIsEditing(user));
  };

  return (
    <EditButton handleSetIsEditing={handleSetIsEditing} />
  );
};

export default EditUserButton;

EditUserButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};
