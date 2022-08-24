import { useNavigate } from 'react-router-dom';
import {
  Button, Center, Checkbox, Container, Flex, Input,
} from '@chakra-ui/react';

import UserService from '../../services/UserService';

import './style.css';

function Login() {
  let remember = false;

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await UserService.login(email, password, remember);
    if (result) navigate('/');
  };

  const onCheck = async (e) => {
    e.preventDefault();
    remember = !remember;
  };

  return (
    <Flex className="auth-container">
      <Container className="artwork" maxW="100%">
        <Center h="100%">insert cool artwork here</Center>
      </Container>
      <Container className="credentials" p="50px" mb="30px" maxW="100%" centerContent>
        <h1 className="title-name">Honeyfilter</h1>
        <form className="credentials-form" onSubmit={handleLogin}>
          <Input id="email" type="email" placeholder="Email" />
          <Input id="password" type="password" placeholder="Password" />
          <Checkbox id="remember" size="sm" onChange={onCheck}>Remember me</Checkbox>
          <Button width="100%" type="submit">Login</Button>
        </form>
        <button className="btn" type="button">Forgot password?</button>
        <p>
          Need an account?
          {' '}
          <button className="btn" type="button">Sign Up</button>
        </p>
      </Container>
    </Flex>
  );
}

export default Login;
