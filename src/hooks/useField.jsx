import { useState } from 'react';

const useField = (type, name, initialState = '', placeholder = null) => {
  const [value, setValue] = useState(initialState);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    type,
    name,
    value,
    placeholder,
    id: name,
    onChange,
    reset,
    setValue,
  };
};

export default useField;
