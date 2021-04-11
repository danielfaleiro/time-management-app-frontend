import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteButton = ({ handleDelete }) => (
  <button type="button" onClick={handleDelete}>
    <FaTrashAlt />
  </button>
);

export default DeleteButton;

DeleteButton.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};
