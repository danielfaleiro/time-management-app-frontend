import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteNote } from '../reducers/notesReducer';

const DeleteNoteButton = (props) => {
  const token = useSelector((state) => state.user.token);
  const { noteId } = props;

  const handleDelete = async () => {
    props.deleteNote(token, noteId);
  };

  return (
    <button type="button" onClick={handleDelete}>
      <FaTrashAlt />
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteNote: (token, value) => {
    dispatch(deleteNote(token, value));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(DeleteNoteButton);

DeleteNoteButton.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  noteId: PropTypes.string.isRequired,
};
