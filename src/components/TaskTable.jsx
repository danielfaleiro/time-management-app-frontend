import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import { Table, Th, Td } from '../styled-components/html';
import { getNotes } from '../reducers/notesReducer';
import DeleteNoteButton from './DeleteNoteButton';
import EditNoteButton from './EditNoteButton';
import { userStatus } from '../userStatus';

const TaskTable = (props) => {
  const notes = useSelector((state) => state.notes);
  const token = useSelector((state) => state.user.token);
  const status = useSelector((state) => state.user.status);
  const isAdmin = status === userStatus.ADMIN;

  useEffect(() => {
    (async function getNotesFromServer() {
      props.getNotes(token);
    }());
  }, [props, token]);

  const notesToShow = notes
    ? notes.map((note) => (
      <tr key={note.id}>
        <Td>{note.date}</Td>
        {isAdmin
          && <Td>{note.user ? note.user.username : null}</Td>}
        <Td>{note.task}</Td>
        <Td>{note.hours}</Td>
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
          {isAdmin
            && <Th>Username</Th>}
          <Th>Task</Th>
          <Th>Hours</Th>
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
