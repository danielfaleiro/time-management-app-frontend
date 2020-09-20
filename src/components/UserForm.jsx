import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser, addUser } from '../reducers/userListReducer';
import { Button, Form } from '../styled-components/html';
import FormField from './FormField';
import useField from '../hooks/useField';
import CancelButton from './CancelButton';
import { setIsEditing } from '../reducers/editUserReducer';

const UserForm = (props) => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.editUser.isEditing);
  const userToEdit = useSelector((state) => state.editUser.user);
  const token = useSelector((state) => state.user.token);
  const name = useField('text', 'name', '', 'Ex.: Joe');
  const username = useField('text', 'username', '', 'Ex.: joesummers');
  const status = useField('number', 'status', '', 'Ex.: 0');
  const hours = useField('number', 'hours', '', 'Ex.: 8');
  const password = useField('password', 'password', '', isEditing ? '•••••••••••••••' : 'Ex.: password');

  useEffect(() => {
    if (isEditing) {
      name.setValue(userToEdit.name);
      status.setValue(userToEdit.status);
      username.setValue(userToEdit.username);
      hours.setValue(userToEdit.hours);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  const finishedEditing = () => {
    name.reset();
    username.reset();
    status.reset();
    password.reset();
    hours.reset();
    dispatch(setIsEditing(null, false));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;
    const content = {
      name: target.name.value,
      status: target.status.value,
      username: target.username.value,
      password: target.password.value,
      hours: target.hours.value,
    };

    if (isEditing) {
      props.updateUser(token, userToEdit.id, content);
    } else {
      props.addUser(token, content);
    }

    finishedEditing();
  };

  const handleCancel = () => {
    finishedEditing();
  };

  return (
    <>
      <h1>{isEditing ? 'Edit User' : 'Add User'}</h1>
      <Form onSubmit={handleSubmit}>
        <FormField field={name} title="Name" />
        <FormField field={username} title="Username*" />
        <FormField field={password} title={isEditing ? 'Password' : 'Password*'} />
        <FormField field={hours} title="Hours*" min={1} max={24} />
        <FormField field={status} title="Status*" min={0} max={2} />
        <Button type="submit">Submit</Button>
        {isEditing
        && <CancelButton handleCancel={handleCancel} />}
      </Form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (token, id, value) => {
    dispatch(updateUser(token, id, value));
  },
  addUser: (token, value) => {
    dispatch(addUser(token, value));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(UserForm);

UserForm.propTypes = {
  updateUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};
