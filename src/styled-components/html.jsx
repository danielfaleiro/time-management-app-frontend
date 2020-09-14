import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  padding: 3px 6px;
  margin-top: 6px;
`;

export default Button;
