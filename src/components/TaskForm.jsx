import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import useField from '../hooks/useField';
import { Button } from '../styled-components/html';
import FormField from './FormField';
import { addNote, updateNote } from '../reducers/notesReducer';

const TaskForm = (props) => {
  const date = useField('date', 'date');
  const hours = useField('text', 'hours');
  const task = useField('text', 'task');
  const token = useSelector((state) => state.user.token);
  const isEditing = useSelector((state) => state.editNote.isEditing);
  const noteToEdit = useSelector((state) => state.editNote.note);

  useEffect(() => {
    if (isEditing) {
      date.setValue(noteToEdit.date);
      hours.setValue(noteToEdit.hours);
      task.setValue(noteToEdit.task);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;
    const content = {
      date: target.date.value,
      hours: target.hours.value,
      task: target.task.value,
      id: noteToEdit.id,
    };
    if (isEditing) {
      props.updateNote(token, content);
    } else {
      props.addNote(token, content);
    }

    date.reset();
    hours.reset();
    task.reset();
  };

  return (
    <>
      <h1>{isEditing ? 'Edit Task' : 'Add Task'}</h1>
      <form onSubmit={handleSubmit}>
        <FormField field={date} title="Date" />
        <FormField field={hours} title="Hours" />
        <FormField field={task} title="Task" />
        <Button type="submit">{isEditing ? 'Update' : 'Add'}</Button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNote: (token, value) => {
    dispatch(addNote(token, value));
  },
  updateNote: (token, value) => {
    dispatch(updateNote(token, value));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TaskForm);

TaskForm.propTypes = {
  addNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};
