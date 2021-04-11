import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { deleteUser } from '../reducers/userListReducer';
import DeleteButton from './DeleteButton';

const DeleteUserButton = (props) => {
  const token = useSelector((state) => state.user.token);
  const { userId } = props;

  const handleDelete = async () => {
    props.deleteUser(token, userId);
  };

  return (
    <DeleteButton handleDelete={handleDelete} />
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (token, value) => {
    dispatch(deleteUser(token, value));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(DeleteUserButton);

DeleteUserButton.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
}