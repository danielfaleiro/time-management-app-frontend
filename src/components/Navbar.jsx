import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import links from '../links';
import theme from '../theme';
import { clearUser } from '../reducers/userReducer';
import { userStatus } from '../userStatus';

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

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  pointer: cursor;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <Nav>
      <Title>Time Management App</Title>
      <NavItems>
        <NavItem to={links.notes}>Tasks</NavItem>
        <NavItem to={links.profile}>Profile</NavItem>
        {status !== userStatus.USER
          && <NavItem to={links.users}>Users</NavItem>}
        <NavItem to={links.login}>
          <Button onClick={handleLogout}>Log Out</Button>
        </NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
