import React from 'react';
import links from '../links';
import Page from '../styled-components/Page';
import AppTitle from '../components/AppTitle';
import Anchor from '../components/Anchor';
import LoginForm from '../components/LoginForm';

const LoginPage = () => (
  <Page>
    <AppTitle />
    <h2>Welcome Back!</h2>
    <p>
      <span>Not Registered? </span>
      <Anchor
        to={links.signup}
        text="Create an account"
      />
    </p>
    <LoginForm />
  </Page>
);

export default LoginPage;
