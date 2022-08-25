import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Checkbox, Input, Flex,
} from '@chakra-ui/react';

import UserService from '../../services/UserService';

function LoginUI(props) {
  let remember = false;
  const { pushPage } = props;
  const [exit, setExit] = useState();
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
    setExit('signup');
  };

  const gotoReset = async (e) => {
    e.preventDefault();
    setExit('reset');
  };

  const onCheck = async (e) => {
    e.preventDefault();
    remember = !remember;
  };

  useEffect(() => {
    if (exit) {
      setTimeout(() => {
        pushPage(exit);
        navigate(`/${exit}`);
      }, 690);
    }
  }, [exit]);

  return (
    <Flex className={exit ? 'slide-out' : 'slide-in'}>
      <form className="credentials-form" autoComplete="off" onSubmit={handleLogin}>
        <Input id="email" type="email" placeholder="Email" />
        <Input id="password" type="password" placeholder="Password" />
        <Checkbox id="remember" size="sm" colorScheme="orange" onChange={onCheck}>Remember me</Checkbox>
        <Button className="btn-primary" width="100%" type="submit">Login</Button>
      </form>
      <button className="btn-text" type="button" onClick={gotoReset}>Forgot password?</button>
      <p>
        Need an account?
        {' '}
        <button className="btn-text" type="button" onClick={gotoSignUp}>Sign Up</button>
      </p>
    </Flex>
  );
}
LoginUI.propTypes = {
  pushPage: PropTypes.func.isRequired,
};

export default LoginUI;
