import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  padding: 6px 12px;
  margin-top: 6px;

  &:hover {
    background-color: ${theme.colors.hover};
  }

  &:active {
    background-color: ${theme.colors.active};
  }
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
`;

const Th = styled(Td)`
  background-color: ${theme.colors.primary};
  color: white;
`;

const Form = styled.form`
  max-width: 300px;
`;

export {
  Button,
  Table,
  Td,
  Th,
  Form,
};
