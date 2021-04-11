import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const StyledTitle = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  color: ${theme.colors.primary};
`;

const AppTitle = () => (
  <StyledTitle>Time Management App</StyledTitle>
);

export default AppTitle;
