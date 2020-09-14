import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import links from '../links';
import theme from '../theme';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  padding: 20px;
  color: white;
`;

const Title = styled.div`
  font-weight: bold;
`;

const NavItem = styled(Link)`
  padding: 0 10px;
  color: white;
  text-decoration: none;

  &:hover {
    color: #d6d6d6;
  }
`;

const NavItems = styled.div`
  display: flex;
`;

const Navbar = () => (
  <Nav>
    <Title>Time Management App</Title>
    <NavItems>
      <NavItem to={links.tasks}>Tasks</NavItem>
      <NavItem to={links.profile}>Profile</NavItem>
      <NavItem to={links.users}>Users</NavItem>
      <NavItem to={links.login}>Log In</NavItem>
    </NavItems>
  </Nav>
);

export default Navbar;
