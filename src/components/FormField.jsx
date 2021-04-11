import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useField from '../hooks/useField';

const Title = styled.div`
  padding-right: 6px;
  margin-bottom: 3px;
`;

const LabelContainer = styled.div`
  padding: 3px 0;
`;

const Input = styled.input`
  padding: 3px;
  width: calc(100% - 10px)
`;

const FormField = ({
  field, title, min, max, disabled, extended,
}) => {
  const inputProperties = ({ reset, setValue, ...rest }) => rest;

  return (
    <LabelContainer>
      <label htmlFor={field.name}>
        <Title>{`${title}:`}</Title>
        <Input
          {...inputProperties(field)}
          disabled={disabled}
          extended={extended}
          min={min}
          max={max}
        />
      </label>
    </LabelContainer>
  );
};

export default FormField;

FormField.defaultProps = {
  disabled: false,
  extended: false,
  min: 0,
  max: 0,
};

FormField.propTypes = {
  field: PropTypes.objectOf(useField).isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  extended: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
};
