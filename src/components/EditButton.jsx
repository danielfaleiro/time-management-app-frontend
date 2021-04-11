import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEdit } from 'react-icons/fa';

const Button = styled.button`
  margin-right: 12px;
`;

const EditButton = ({ handleSetIsEditing }) => (
  <Button type="button" onClick={handleSetIsEditing}>
    <FaEdit />
  </Button>
);

export default EditButton;

EditButton.propTypes = {
  handleSetIsEditing: PropTypes.func.isRequired,
};
