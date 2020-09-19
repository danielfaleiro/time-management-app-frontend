import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../styled-components/html';

const StyledButton = styled(Button)`
  background-color: #9e0d0d;
  margin-left: 12px;
`;

const CancelButton = ({ handleCancel }) => (
  <StyledButton type="button" onClick={handleCancel}>Cancel</StyledButton>
);

export default CancelButton;

CancelButton.propTypes = {
  handleCancel: PropTypes.func.isRequired,
};
