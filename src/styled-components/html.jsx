import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  padding: 6px 12px;
  margin-top: 6px;
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

export {
  Button,
  Table,
  Td,
  Th,
};
