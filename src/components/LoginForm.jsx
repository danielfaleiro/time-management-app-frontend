import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useField from '../hooks/useField';
import { Button } from '../styled-components/html';
import FormField from './FormField';
import { setUserByLogin } from '../reducers/userReducer';

const LoginForm = (props) => {
  const username = useField('text', 'username');
  const password = useField('password', 'password');

  const handleLogin = async (event) => {
    event.preventDefault();
    const { target } = event;
    const content = {
      username: target.username.value,
      password: target.password.value,
    };
    props.setUserByLogin(content);
    username.reset();
    password.reset();
  };

  return (
    <form onSubmit={handleLogin}>
      <FormField
        field={username}
        title="Username"
      />
      <FormField
        field={password}
        title="Password"
      />
      <Button type="submit">Log in</Button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUserByLogin: (value) => {
    dispatch(setUserByLogin(value));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);

LoginForm.propTypes = {
  setUserByLogin: PropTypes.func.isRequired,
};
