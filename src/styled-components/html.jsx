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

export default Button;
