import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useField from '../hooks/useField';

const Title = styled.span`
  padding-right: 6px;
`;

const LabelContainer = styled.div`
  padding: 3px 0;
`;

const Input = styled.input`
  padding: 3px;
`;

const FormField = ({ field, title, disabled }) => {
  const inputProperties = ({ reset, setValue, ...rest }) => rest;

  return (
    <LabelContainer>
      <label htmlFor={field.name}>
        <Title>{`${title}:`}</Title>
        <Input {...inputProperties(field)} disabled={disabled} />
      </label>
    </LabelContainer>
  );
};

export default FormField;

FormField.defaultProps = {
  disabled: false,
};

FormField.propTypes = {
  field: PropTypes.objectOf(useField).isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
