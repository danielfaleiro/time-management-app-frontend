import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppTitle from '../components/AppTitle';
import Page from '../styled-components/Page';
import UserForm from '../components/ProfileForm';
import links from '../links';
import Anchor from '../components/Anchor';
import signUpService from '../services/users';

const SignUpPage = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;
    const content = {
      name: target.name.value,
      username: target.username.value,
      password: target.password.value,
      hours: target.hours.value,
    };

    try {
      await signUpService.signUp(content);
      setIsRedirect(true);
    } catch (e) {
      console.log(e);
    }
  };

  if (isRedirect) {
    return <Redirect to={links.login} />;
  }

  return (
    <Page>
      <AppTitle />
      <h2>Sign up to get started</h2>
      <p>
        <span>Already Registered? </span>
        <Anchor
          to={links.login}
          text="Login"
        />
      </p>
      <UserForm isSignUp onSubmit={handleSubmit} />
    </Page>
  );
};

export default SignUpPage;
