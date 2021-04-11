import styled from 'styled-components';
import { Form } from './html';

const CredentialsForm = styled(Form)`
    margin: ${(props) => (props.center ? 'auto' : 0)};
`;

export default CredentialsForm;
