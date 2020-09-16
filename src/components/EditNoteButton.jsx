import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { setIsEditing } from '../reducers/editNoteReducer';

const Button = styled.button`
  margin-right: 12px;
`;

const EditNoteButton = ({ note }) => {
  const dispatch = useDispatch();

  const handleSetIsEditing = () => {
    dispatch(setIsEditing(note));
  };

  return (
    <Button type="button" onClick={handleSetIsEditing}>
      <FaEdit />
    </Button>
  );
};

export default EditNoteButton;

EditNoteButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  note: PropTypes.object.isRequired,
};
