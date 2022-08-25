import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Input, Flex } from '@chakra-ui/react';

import UserService from '../../services/UserService';

function SignUpUI(props) {
  const [exit, setExit] = useState(false);
  const { pushPage } = props;
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;
    const result = await UserService.signUp(email, password, username);
    if (result) navigate('/');
  };

  const gotoLogin = async (e) => {
    e.preventDefault();
    setExit(true);
  };

  useEffect(() => {
    if (exit) {
      setTimeout(() => {
        pushPage('login');
        navigate('/login');
      }, 690);
    }
  }, [exit]);

  return (
    <Flex className={exit ? 'slide-out' : 'slide-in'}>
      <form className="credentials-form" autoComplete="off" onSubmit={handleSignUp}>
        <Input id="email" type="email" placeholder="Email" />
        <Input id="username" type="text" placeholder="Username" />
        <Input id="password" type="password" placeholder="Password" />
        <Button className="btn-primary" width="100%" type="submit">Sign Up</Button>
      </form>
      <p>
        Already have an account?
        {' '}
        <button className="btn-text" type="button" onClick={gotoLogin}>Login</button>
      </p>
    </Flex>
  );
}
SignUpUI.propTypes = {
  pushPage: PropTypes.func.isRequired,
};

export default SignUpUI;
