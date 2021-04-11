import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setIsEditing } from '../reducers/editNoteReducer';
import EditButton from './EditButton';

const EditNoteButton = ({ note }) => {
  const dispatch = useDispatch();
  const handleSetIsEditing = () => {
    dispatch(setIsEditing(note));
    window.scrollTo(0, 0);
  };

  return (
    <EditButton handleSetIsEditing={handleSetIsEditing} />
  );
};

export default EditNoteButton;

EditNoteButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  note: PropTypes.object.isRequired,
};
