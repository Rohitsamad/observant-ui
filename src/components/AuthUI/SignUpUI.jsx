import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Container, Input } from '@chakra-ui/react';

import UserService from '../../services/UserService';

function SignUpUI(props) {
  const { renderSignUpPage } = props;

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
    navigate('/login');
    renderSignUpPage(false);
  };

  return (
    <Container className="credentials" p="50px" mb="30px" maxW="100%" centerContent>
      <h1 className="title-name">Honeyfilter</h1>
      <form className="credentials-form" onSubmit={handleSignUp}>
        <Input id="email" type="email" placeholder="Email" />
        <Input id="username" type="text" placeholder="Username" />
        <Input id="password" type="password" placeholder="Password" />
        <Button className="btn-primary" width="100%" type="submit">Sign Up</Button>
      </form>
      <p>
        Already have account?
        {' '}
        <button className="btn-text" type="button" onClick={gotoLogin}>Login</button>
      </p>
    </Container>
  );
}
SignUpUI.propTypes = {
  renderSignUpPage: PropTypes.func.isRequired,
};

export default SignUpUI;
