import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { deleteNote } from '../reducers/notesReducer';
import DeleteButton from './DeleteButton';

const DeleteNoteButton = (props) => {
  const token = useSelector((state) => state.user.token);
  const { noteId } = props;

  const handleDelete = async () => {
    props.deleteNote(token, noteId);
  };

  return (
    <DeleteButton handleDelete={handleDelete} />
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
