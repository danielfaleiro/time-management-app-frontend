import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import { Table, Th, Td } from '../styled-components/html';
import { getStatusText } from '../userStatus';
import { getUserList } from '../reducers/userListReducer';
import DeleteUserButton from './DeleteUserButton';
import EditUserButton from './EditUserButton';

const UserTable = (props) => {
  const users = useSelector((state) => state.userList);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    (async function getUserListFromServer() {
      props.getUserList(token);
    }());
  }, [props, token]);

  const usersToShow = users
    ? users.map((user) => (
      <tr key={user.id}>
        <Td>{user.username}</Td>
        <Td>{user.name}</Td>
        <Td>{user.hours}</Td>
        <Td>{getStatusText(user.status)}</Td>
        <Td>
          <EditUserButton user={user} />
          <DeleteUserButton userId={user.id} />
        </Td>
      </tr>
    ))
    : undefined;
  return (
    <Table>
      <thead>
        <tr>
          <Th>Username</Th>
          <Th>Name</Th>
          <Th>Hours</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {usersToShow}
      </tbody>
    </Table>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUserList: (token) => {
    dispatch(getUserList(token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(UserTable);

UserTable.propTypes = {
  getUserList: PropTypes.func.isRequired,
};
