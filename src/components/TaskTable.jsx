import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import { Table, Th, Td } from '../styled-components/html';
import { getNotes } from '../reducers/notesReducer';
import DeleteNoteButton from './DeleteNoteButton';
import EditNoteButton from './EditNoteButton';

const TaskTable = (props) => {
  const notes = useSelector((state) => state.notes);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    (async function getNotesFromServer() {
      props.getNotes(token);
    }());
  }, [props, token]);

  const notesToShow = notes
    ? notes.map((note) => (
      <tr key={note.id}>
        <Td>{note.date}</Td>
        <Td>{note.hours}</Td>
        <Td>{note.task}</Td>
        <Td>
          <EditNoteButton note={note} />
          <DeleteNoteButton noteId={note.id} />
        </Td>
      </tr>
    ))
    : undefined;

  return (
    <Table>
      <thead>
        <tr>
          <Th>Date</Th>
          <Th>Hours</Th>
          <Th>Task</Th>
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {notesToShow}
      </tbody>
    </Table>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getNotes: (token) => {
    dispatch(getNotes(token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TaskTable);

TaskTable.propTypes = {
  getNotes: PropTypes.func.isRequired,
};
