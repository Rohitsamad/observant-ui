import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Checkbox, Container, Input,
} from '@chakra-ui/react';

import UserService from '../../services/UserService';

function LoginUI(props) {
  let remember = false;
  const { renderSignUpPage } = props;

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await UserService.signUp(email, password);
    if (result) navigate('/');
  };

  const gotoSignUp = async (e) => {
    e.preventDefault();
    navigate('/signup');
    renderSignUpPage(true);
  };

  const onCheck = async (e) => {
    e.preventDefault();
    remember = !remember;
  };

  return (
    <Container className="credentials" p="50px" mb="30px" maxW="100%" centerContent>
      <h1 className="title-name">Honeyfilter</h1>
      <form className="credentials-form" onSubmit={handleLogin}>
        <Input id="email" type="email" placeholder="Email" />
        <Input id="password" type="password" placeholder="Password" />
        <Checkbox id="remember" size="sm" colorScheme="orange" onChange={onCheck}>Remember me</Checkbox>
        <Button className="btn-primary" width="100%" type="submit">Login</Button>
      </form>
      <button className="btn-text" type="button">Forgot password?</button>
      <p>
        Need an account?
        {' '}
        <button className="btn-text" type="button" onClick={gotoSignUp}>Sign Up</button>
      </p>
    </Container>
  );
}
LoginUI.propTypes = {
  renderSignUpPage: PropTypes.func.isRequired,
};

export default LoginUI;
