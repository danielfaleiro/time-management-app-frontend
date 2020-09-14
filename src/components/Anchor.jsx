import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../theme';

const StyledLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
`;

const Anchor = ({ to, text }) => (
  <StyledLink to={to}>
    {text}
  </StyledLink>
);

export default Anchor;

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
