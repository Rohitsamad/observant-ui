import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Center, Container, Flex,
} from '@chakra-ui/react';

import LoginUI from './LoginUI';
import SignUpUI from './SignUpUI';
import './style.css';

function AuthUI(props) {
  const { newAuth } = props;
  const [signUpPage, renderSignUpPage] = useState(newAuth);

  return (
    <Flex className="auth-container">
      <Container className="artwork" maxW="100%">
        <Center h="100%">insert cool artwork here</Center>
      </Container>
      {
        signUpPage
          ? <SignUpUI renderSignUpPage={renderSignUpPage} />
          : <LoginUI renderSignUpPage={renderSignUpPage} />
      }
    </Flex>
  );
}
AuthUI.propTypes = {
  newAuth: PropTypes.bool.isRequired,
};

export default AuthUI;
