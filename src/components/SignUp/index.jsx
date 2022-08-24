import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

import UserService from '../../services/UserService';

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await UserService.signUp(email, password);
    if (result) navigate('/');
  };

  return (
    <div>
      <p>Sign Up</p>
      <form onSubmit={handleSignUp}>
        Email:
        <input type="text" name="email" />
        <br />
        Password:
        <input type="password" name="password" />
        <br />
        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
}

export default SignUp;
