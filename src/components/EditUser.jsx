import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../reducers/userListReducer';
import { Button } from '../styled-components/html';
import FormField from './FormField';
import useField from '../hooks/useField';
import CancelButton from '../styled-components/CancelButton';
import { setIsEditing } from '../reducers/editUserReducer';

const EditUser = (props) => {
  const dispatch = useDispatch();
  const name = useField('text', 'name');
  const username = useField('text', 'username');
  const status = useField('text', 'status');
  const isEditing = useSelector((state) => state.editUser.isEditing);
  const userToEdit = useSelector((state) => state.editUser.user);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (isEditing) {
      name.setValue(userToEdit.name);
      status.setValue(userToEdit.status);
      username.setValue(userToEdit.username);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  const finishedEditing = () => {
    name.reset();
    username.reset();
    status.reset();
    dispatch(setIsEditing(null, false));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;
    const content = {
      name: target.name.value,
      status: target.status.value,
      username: target.username.value,
    };
    if (isEditing) {
      props.updateUser(token, userToEdit.id, content);
    } else {
      console.log('add user');
    }

    finishedEditing();
  };

  const handleCancel = () => {
    
    finishedEditing();
  };

  return (
    <>
      <h1>{isEditing ? 'Edit User' : 'Add User'}</h1>
      <form onSubmit={handleSubmit}>
        <FormField field={username} title="Username" />
        <FormField field={name} title="Name" />
        <FormField field={status} title="Status" />
        <Button type="submit">Submit</Button>
        {isEditing
        && <CancelButton type="button" onClick={handleCancel}>Cancel</CancelButton>}
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (token, id, value) => {
    dispatch(updateUser(token, id, value));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(EditUser);

EditUser.propTypes = {
  updateUser: PropTypes.func.isRequired,
};
