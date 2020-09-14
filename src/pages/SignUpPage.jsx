import React from 'react';
import AppTitle from '../components/AppTitle';
import Page from '../styled-components/Page';
import UserForm from '../components/UserForm';
import links from '../links';
import Anchor from '../components/Anchor';

const SignUpPage = () => (
  <Page>
    <AppTitle />
    <h2>Sign up to get started</h2>
    <p>
      <span>Already Registered? </span>
      <Anchor
        to={links.login}
        text="Log in"
      />
    </p>
    <UserForm isSignUp />
  </Page>
);

export default SignUpPage;
