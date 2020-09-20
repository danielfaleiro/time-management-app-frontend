import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useField from '../hooks/useField';
import { Button } from '../styled-components/html';
import FormField from './FormField';
import { setUserByLogin } from '../reducers/userReducer';
import CredentialsForm from '../styled-components/CredentialsForm';

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
    <CredentialsForm onSubmit={handleLogin} center>
      <FormField
        field={username}
        title="Username"
        extended
      />
      <FormField
        field={password}
        title="Password"
        extended
      />
      <Button type="submit">Log in</Button>
    </CredentialsForm>
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
