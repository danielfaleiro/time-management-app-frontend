import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import useField from '../hooks/useField';
import { Button, Form } from '../styled-components/html';
import FormField from './FormField';
import { addNote, updateNote } from '../reducers/notesReducer';
import { userStatus } from '../userStatus';
import { setIsEditing } from '../reducers/editNoteReducer';
import CancelButton from './CancelButton';

const TaskForm = (props) => {
  const dispatch = useDispatch();
  const user = useField('text', 'user', '', 'Ex.: joesummers');
  const date = useField('date', 'date');
  const hours = useField('number', 'hours', '', 'Ex.: 8');
  const task = useField('text', 'task', '', 'Ex.: task name');
  const { token, status } = useSelector((state) => state.user);
  const isEditing = useSelector((state) => state.editNote.isEditing);
  const noteToEdit = useSelector((state) => state.editNote.note);
  const isAdmin = status === userStatus.ADMIN;

  useEffect(() => {
    if (isEditing) {
      date.setValue(noteToEdit.date);
      hours.setValue(noteToEdit.hours);
      task.setValue(noteToEdit.task);
      if (isAdmin) {
        user.setValue(noteToEdit.user.username);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing, isAdmin]);

  const resetFields = () => {
    date.reset();
    hours.reset();
    task.reset();
    user.reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;
    let content = {
      date: target.date.value,
      hours: target.hours.value,
      task: target.task.value,
      id: noteToEdit.id,
    };

    if (isAdmin) {
      content = { ...content, user: target.user.value };
    }

    if (isEditing) {
      props.updateNote(token, content);
      dispatch(setIsEditing(null, false));
    } else {
      props.addNote(token, content);
    }

    resetFields();
  };

  const handleCancel = () => {
    dispatch(setIsEditing(null, false));
    resetFields();
  };

  return (
    <>
      <h1>{isEditing ? 'Edit Task' : 'Add Task'}</h1>
      <Form onSubmit={handleSubmit}>
        {isAdmin
          && <FormField field={user} title="Username*" />}
        <FormField field={date} title="Date*" />
        <FormField field={hours} title="Hours*" min={1} max={24} />
        <FormField field={task} title="Task*" />
        <Button type="submit">{isEditing ? 'Update' : 'Add'}</Button>
        {isEditing
          && <CancelButton handleCancel={handleCancel} />}
      </Form>
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
