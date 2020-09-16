import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import UserForm from '../components/UserForm';
import AppPage from '../components/Page';
import { updateUser } from '../reducers/userReducer';

const ProfilePage = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEditing) {
      const { target } = event;
      const content = {
        name: target.name.value,
        username: target.username.value,
        password: target.password.value,
        hours: target.hours.value,
      };
      props.updateUser(user.token, content);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <AppPage>
      <h1>Profile</h1>
      <UserForm
        onSubmit={handleSubmit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        user={user}
      />
    </AppPage>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (token, value) => {
    dispatch(updateUser(token, value));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ProfilePage);

ProfilePage.propTypes = {
  updateUser: PropTypes.func.isRequired,
};
