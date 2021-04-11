import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import styled from 'styled-components';
import { Table, Th, Td } from '../styled-components/html';
import { getNotes } from '../reducers/notesReducer';
import DeleteNoteButton from './DeleteNoteButton';
import EditNoteButton from './EditNoteButton';
import { userStatus } from '../userStatus';

const StyledTd = styled(Td)`
  background-color: ${({ meetGoal, isSameUser }) => {
    if (isSameUser) {
      return meetGoal ? '#b5e8cc' : '#e8b5b5';
    }
    return 'white';
  }}
`;

const filterNotes = (notes, startDate, endDate) => {
  if (!startDate && endDate) {
    return notes.filter((note) => note.date <= endDate);
  }
  if (startDate && !endDate) {
    return notes.filter((note) => note.date >= startDate);
  }
  if (startDate && endDate) {
    return notes.filter((note) => note.date <= endDate && note.date >= startDate);
  }

  return notes;
};

// eslint-disable-next-line no-shadow
const TaskTable = ({ getNotes, startDate, endDate }) => {
  const notes = useSelector((state) => state.notes);
  const {
    status, hours, token, id,
  } = useSelector((state) => state.user);
  const isAdmin = status === userStatus.ADMIN;
  const dateMap = new Map();
  const filteredNotes = filterNotes(notes, startDate, endDate);

  const checkSameUser = (note) => (isAdmin ? id === note.user.id : true);

  filteredNotes.forEach((note) => {
    if (checkSameUser(note)) {
      const noteHours = dateMap.get(note.date);
      dateMap.set(note.date, (noteHours || 0) + note.hours);
    }
  });

  const checkMeetGoal = (note) => {
    if (isAdmin && !checkSameUser(note)) {
      return dateMap.get(note.date) >= note.user.hours;
    }
    return dateMap.get(note.date) >= hours;
  };

  useEffect(() => {
    (async function getNotesFromServer() {
      getNotes(token);
    }());
  }, [getNotes, token]);

  const sortedNotes = filteredNotes.sort((a, b) => new Date(b.date) - new Date(a.date));

  const notesToShow = notes
    ? sortedNotes.map((note) => {
      const meetGoal = checkMeetGoal(note);
      const isSameUser = checkSameUser(note);
      const rowProps = { meetGoal, isSameUser };
      return (
        <tr key={note.id}>
          <StyledTd {...rowProps}>{note.date}</StyledTd>
          {isAdmin
          && <StyledTd {...rowProps}>{note.user ? note.user.username : null}</StyledTd>}
          <StyledTd {...rowProps}>{note.task}</StyledTd>
          <StyledTd {...rowProps}>{note.hours}</StyledTd>
          <StyledTd {...rowProps}>
            <EditNoteButton note={note} />
            <DeleteNoteButton noteId={note.id} />
          </StyledTd>
        </tr>
      );
    })
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
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};
